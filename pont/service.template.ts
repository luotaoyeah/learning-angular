import * as Pont from '@luotao/pont-engine';
import { BaseClass, CodeGenerator, Interface, Mod } from '@luotao/pont-engine';

/**
 * 目录结构
 * https://github.com/alibaba/pont#templatepath
 */
export class FileStructures extends Pont.FileStructures {
  public getMultipleOriginsFileStructures() {
    // tslint:disable-next-line:no-any
    const files: any = {};
    // @ts-ignore
    this.generators.forEach(generator => {
      const dataSource = generator.dataSource.name;
      const dsFiles = this.getOriginFileStructures(generator, true);

      files[dataSource] = dsFiles;
    });

    return {
      ...files,
      'index.ts': this.getDataSourcesTs.bind(this),
      'api.d.ts': this.getDataSourcesDeclarationTs.bind(this),
      'api-lock.json': this.getLockContent.bind(this),
      'http-client.ts': this.getHttpClientContent.bind(this),
    };
  }

  public getBaseClassesInDeclaration(
    originCode: string,
    usingMultipleOrigins: boolean,
  ) {
    if (usingMultipleOrigins) {
      return `
      declare namespace DEFS {
        export ${originCode}
      };
      `;
    }

    return `
      declare ${originCode}
    `;
  }

  public getModsDeclaration(originCode: string, usingMultipleOrigins: boolean) {
    if (usingMultipleOrigins) {
      return `
      declare namespace API {
        export ${originCode}
      };
      `;
    }

    return `
      declare ${originCode}
    `;
  }

  public getOriginFileStructures(
    generator: CodeGenerator,
    usingMultipleOrigins = false,
  ) {
    // tslint:disable-next-line:no-any
    const mods: any = {};
    const dataSource = generator.dataSource;

    dataSource.mods.forEach(mod => {
      // tslint:disable-next-line:no-any
      const currentMod: any = {};

      mod.interfaces.forEach(inter => {
        /*
         * api gateway prefix
         */
        if (inter.path.startsWith('/api')) {
          inter.path = `${dataSource.name.toLowerCase()}${inter.path}`;
        }

        currentMod[`${inter.name}.ts`] = generator.getInterfaceContent.bind(
          generator,
          inter,
        );
        currentMod['index.ts'] = generator.getModIndex.bind(generator, mod);
      });
      mods[mod.name] = currentMod;

      mods['index.ts'] = generator.getModsIndex.bind(generator);
    });

    generator.getBaseClassesInDeclaration = this.getBaseClassesInDeclaration.bind(
      this,
      generator.getBaseClassesInDeclaration(),
      usingMultipleOrigins,
    );
    generator.getModsDeclaration = this.getModsDeclaration.bind(
      this,
      generator.getModsDeclaration(),
      usingMultipleOrigins,
    );

    // tslint:disable-next-line:no-any
    const result: any = {
      'models.ts': generator.getBaseClassesIndex.bind(generator),
      Controllers: mods,
      'index.ts': generator.getIndex.bind(generator),
      'api.d.ts': generator.getDeclaration.bind(generator),
    };

    if (!usingMultipleOrigins) {
      result['api-lock.json'] = this.getLockContent.bind(this);
    }

    return result;
  }

  public getFileStructures() {
    // @ts-ignore
    if (this.usingMultipleOrigins || this.generators.length > 1) {
      return this.getMultipleOriginsFileStructures();
    } else {
      // @ts-ignore
      return this.getOriginFileStructures(this.generators[0]);
    }
  }

  public getDataSourcesTs() {
    // @ts-ignore
    const dataSources: Array<string> = this.generators.map(
      (generator: CodeGenerator) => generator.dataSource.name,
    );

    return `
      /* tslint:disable:no-any */
      ${dataSources
        .map(name => {
          return `import { DEFS as ${name}Defs, ${name} } from './${name}';`;
        })
        .join('\n')}

      export const DEFS = {
        ${dataSources.map(name => `${name}: ${name}Defs,`).join('\n')}
      };
      
      export const API = {
        ${dataSources.join(',\n')}
      };
    `;
  }

  public getDataSourcesDeclarationTs() {
    // @ts-ignore
    const dataSources: Array<string> = this.generators.map(
      (generator: CodeGenerator) => generator.dataSource.name,
    );

    return `
    ${dataSources
      .map(name => {
        return `/// <reference path="./${name}/api.d.ts" />`;
      })
      .join('\n')}
    `;
  }

  /**
   * src/app/core/api/http-client.ts
   */
  public getHttpClientContent(): string {
    return `
      import { _HttpClient } from '@delon/theme';
  
      let client: _HttpClient | null = null;
      
      export function setHttpClient(_httpClient: _HttpClient): void {
        client = _httpClient;
      }
      
      export function httpClient(): _HttpClient {
        if (client === null) {
          throw new Error('HTTP CLIENT IS NULL');
        }
      
        return client;
      }
    `;
  }
}

/**
 * 代码生成
 * https://github.com/alibaba/pont#templatepath
 */
export default class MyGenerator extends CodeGenerator {
  /** 获取某个基类的类型定义代码 */
  public getBaseClassInDeclaration(base: BaseClass) {
    if (base.templateArgs && base.templateArgs.length) {
      return `class ${base.name}<${base.templateArgs
        .map((ignored, index) => `T${index}`)
        .join(', ')}> {
        ${base.properties
          .map(prop => prop.toPropertyCode().replace(/\*\/\n/, '*/\npublic '))
          .join('\n')}
      }
      `;
    }
    return `class ${base.name} {
      ${base.properties
        .map(prop => prop.toPropertyCode().replace(/\*\/\n/, '*/\npublic '))
        .join('\n')}
    }
    `;
  }

  /** 获取所有基类的类型定义代码，一个 namespace */
  public getBaseClassesInDeclaration() {
    const content = `namespace ${this.dataSource.name || 'DEFS'} {
      ${this.dataSource.baseClasses
        .map(
          base => `
        export ${this.getBaseClassInDeclaration(base)}
      `,
        )
        .join('\n')}
    }
    `;

    return content;
  }

  public getBaseClassesInDeclarationWithMultipleOrigins() {
    return `
      /* tslint:disable:no-any */
      declare namespace DEFS {
        export ${this.getBaseClassesInDeclaration()}
      }
    `;
  }

  public getBaseClassesInDeclarationWithSingleOrigin() {
    return `
      declare ${this.getBaseClassesInDeclaration()}
    `;
  }

  /** 获取接口内容的类型定义代码 */
  public getInterfaceContentInDeclaration(inter: Interface) {
    const bodyParams = inter.getBodyParamsCode();
    const params =
      (bodyParams
        ? `params: Params, body: ${bodyParams}`
        : `params: Params, body?: {}`) + ', options?: IRequestOptions,';

    return `
      export ${inter.getParamsCode()}
      
      export function request(${params}): Observable<${inter.responseType
      .replace(/.*?ResponseResult</, '')
      .slice(0, -1)}>;
    `;
  }

  /** 获取模块的类型定义代码，一个 namespace ，一般不需要覆盖 */
  public getModsDeclaration() {
    const mods = this.dataSource.mods;

    const content = `namespace ${this.dataSource.name || 'API'} {
        ${mods
          .map(
            mod => `
          /**
           * ${mod.description || ''}
           */
          export namespace ${mod.name} {
            ${mod.interfaces
              // @ts-ignore
              .map(this.getInterfaceInDeclaration.bind(this))
              .join('\n')}
          }
        `,
          )
          .join('\n\n')}
      }
    `;

    return content;
  }

  public getInterfaceInDeclaration(inter: Interface) {
    return `
      /**
        * ${inter.description || ''}
        * ${inter.path}
        */
      export namespace ${inter.name} {
        ${this.getInterfaceContentInDeclaration(inter)}
      }
    `;
  }

  public getModsDeclarationWithMultipleOrigins() {}

  public getModsDeclarationWithSingleOrigin() {}

  /** 获取公共的类型定义代码 */
  public getCommonDeclaration() {
    return `export interface IRequestOptions {
              headers?: _HttpHeaders;
              observe?: HttpObserve;
              responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
              reportProgress?: boolean;
              withCredentials?: boolean;
    }`;
  }

  /**
   * src/app/core/api/SortingPd/api.d.ts
   */
  public getDeclaration() {
    return `
      /* tslint:disable:no-any */
      import { _HttpHeaders, HttpObserve } from '@delon/theme/src/services/http/http.client';
      import { Observable } from 'rxjs';
      
      // @ts-ignore
      type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
        [key in Key]: Value;
      }

      ${this.getCommonDeclaration()}

      ${this.getBaseClassesInDeclaration()}

      ${this.getModsDeclaration()}
    `;
  }

  /**
   * src/app/core/api/SortingPd/index.ts
   */
  public getIndex() {
    let conclusion = `
      import * as DEFS from './models';
      import './Controllers/';

      export const DEFS = DEFS;
    `;

    if (this.dataSource.name) {
      conclusion = `
        import { ${this.dataSource.name} as DEFS } from './models';
        export { ${this.dataSource.name} } from './Controllers/';
        export { DEFS };
      `;
    }

    return conclusion;
  }

  /**
   * src/app/core/api/SortingPd/models.ts
   */
  public getBaseClassesIndex() {
    const clsCodes = this.dataSource.baseClasses.map(base => {
      const T =
        base.templateArgs && base.templateArgs.length > 0
          ? `<${base.templateArgs
              .map((ignored, index) => `T${index}`)
              .join(', ')}>`
          : '';

      return `
        class ${base.name}${T} {
          ${base.properties
            .map(p =>
              p
                .toPropertyCodeWithInitValue(base.name + T)
                .replace(/\*\/\n/, '*/\npublic '),
            )
            .filter(id => id)
            .join('\n')}
            
            constructor(t: Partial<${base.name}${T}> = {}) {
              DtoUtil.keys(t).forEach(key => {
                const value = Reflect.get(t, key);
                if (!isNil(value)) {
                  switch (key) {
                  ${base.properties
                    .map(p => {
                      if (
                        !['', 'number', 'string', 'boolean', 'Array'].includes(
                          p.dataType.typeName,
                        )
                      ) {
                        return (
                          "case '" +
                          p.name +
                          "':Reflect.set(this, key, DtoUtil.from(" +
                          p.dataType.typeName +
                          ', value));break;'
                        );
                      }

                      if (p.dataType.typeName === 'Array') {
                        if (p.dataType.typeArgs.length === 1) {
                          const typeArg = p.dataType.typeArgs[0];
                          if (typeArg.templateIndex === -1) {
                            return (
                              "case '" +
                              p.name +
                              "':Reflect.set(this, key, DtoUtil.fromArray(" +
                              typeArg.typeName +
                              ', value));break;'
                            );
                          }
                        }
                      }

                      return (
                        "case '" +
                        p.name +
                        "':Reflect.set(this, key, value);break;"
                      );
                    })
                    .join('\n')}
                    default:
                      Reflect.set(this, key, value);
                      break;
                  }
                }
              });
            }
        }
      `;
    });

    if (this.dataSource.name) {
      return `
        import { isNil } from 'lodash-es';
        import { DtoUtil } from '@app/core/utils';

        ${clsCodes.join('\n')}
        export const ${this.dataSource.name} = {
          ${this.dataSource.baseClasses.map(bs => bs.name).join(',\n')}
        }
      `;
    }

    return clsCodes.map(cls => `export ${cls}`).join('\n');
  }

  /**
   * src/app/core/api/SortingPd/Controllers/SortingParameterController/GetAllValues.ts
   */
  public getInterfaceContent(inter: Interface) {
    const bodyParmas = inter.getBodyParamsCode();
    const requestParams =
      (bodyParmas
        ? `params: Params, body: ${inter.getBodyParamsCode()}`
        : `params: Params, body: {} = {}`) + ', options: IRequestOptions = {},';

    return `
    /**
     * @description ${inter.description || ''}
     */

    import { Observable } from 'rxjs';
    // @ts-ignore: TS6133
    import { DEFS, IRequestOptions } from '../../api';
    import { httpClient } from '../../../http-client';

    export ${inter.getParamsCode()}
    
    export function request(${requestParams}): Observable<${inter.responseType
      .replace(/.*?ResponseResult</, '')
      .slice(0, -1)}> {
      return httpClient().request(
        '${inter.method}',
        '${inter.path}',
        {
          params,
          body,
          ...options,
        },
      );
    }
   `;
  }

  /**
   * src/app/core/api/SortingPd/Controllers/SortingParameterController/index.ts
   */
  public getModIndex(mod: Mod) {
    return `
      /**
       * @description ${mod.description || ''}
       */
      ${mod.interfaces
        .map(inter => {
          return `import * as ${inter.name} from './${inter.name}';`;
        })
        .join('\n')}

      export {
        ${mod.interfaces.map(inter => inter.name).join(', \n')}
      }
    `;
  }

  /**
   * src/app/core/api/SortingPd/Controllers/index.ts
   */
  public getModsIndex() {
    let conclusion = `
      export const API = {
        ${this.dataSource.mods.map(mod => mod.name).join(', \n')}
      };
    `;

    if (this.dataSource.name) {
      conclusion = `
        export const ${this.dataSource.name} = {
          ${this.dataSource.mods.map(mod => mod.name).join(', \n')}
        };
      `;
    }

    return `
      ${this.dataSource.mods
        .map(mod => {
          return `import * as ${mod.name} from './${mod.name}';`;
        })
        .join('\n')}

      ${conclusion}
    `;
  }
}
