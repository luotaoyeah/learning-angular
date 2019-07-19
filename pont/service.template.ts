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
    this.generators.forEach(generator => {
      const dataSource = generator.dataSource.name;
      files[dataSource] = this.getOriginFileStructures(generator, true);
    });

    return {
      ...files,
      'index.ts': this.getDataSourcesTs.bind(this),
      'api-lock.json': this.getLockContent.bind(this),
      'http-client.ts': this.getHttpClientContent.bind(this),
    };
  }

  public getDataSourcesDeclarationTs() {
    return '';
  }

  public getBaseClassesInDeclaration(originCode: string, usingMultipleOrigins: boolean) {
    return '';
  }

  public getModsDeclaration(originCode: string, usingMultipleOrigins: boolean) {
    return '';
  }

  public getOriginFileStructures(generator: CodeGenerator, usingMultipleOrigins = false) {
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

        inter.name = inter.name.replace(/(^get)|(^post)|(^put)|(^delete)/, '') || 'None';

        currentMod[`${inter.name}.ts`] = generator.getInterfaceContent.bind(generator, inter);
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
    const dataSources: Array<string> = this.generators.map((generator: CodeGenerator) => generator.dataSource.name);

    return `
      ${dataSources
        .map(name => {
          return `import { DEF as ${name}Defs, ${name} as ${name}Api } from './${name}';`;
        })
        .join('\n')}

      export namespace DEF {
        ${dataSources.map(name => `export import ${name} = ${name}Defs;`).join('\n')}
      }

      export namespace API {
        ${dataSources.map(name => `export import ${name} = ${name}Api;`).join('\n')}
      };
    `;
  }

  /**
   * src/app/core/api/http-client.ts
   */
  public getHttpClientContent(): string {
    return `
      import { _HttpClient } from '@delon/theme';
      import { _HttpHeaders, HttpObserve } from '@delon/theme/src/services/http/http.client';
  
      let client: _HttpClient | null = null;
      
      /**
       * Set the HttpClient instance
       * @param _httpClient The HttpClient instance
       */
      export function setHttpClient(_httpClient: _HttpClient): void {
        client = _httpClient;
      }
      
      /**
       * Get the HttpClient instance
       */
      export function httpClient(): _HttpClient {
        if (client === null) {
          throw new Error('HTTP CLIENT IS NULL');
        }
      
        return client;
      }
      
      /**
       * The extra request options
       */
      export interface IRequestOptions {
        headers?: _HttpHeaders;
        observe?: HttpObserve;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        reportProgress?: boolean;
        withCredentials?: boolean;
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
      return `class ${base.name}<${base.templateArgs.map((ignored, index) => `T${index}`).join(', ')}> {
        ${base.properties.map(prop => prop.toPropertyCode().replace(/\*\/\n/, '*/\npublic ')).join('\n')}
      }
      `;
    }
    return `class ${base.name} {
      ${base.properties.map(prop => prop.toPropertyCode().replace(/\*\/\n/, '*/\npublic ')).join('\n')}
    }
    `;
  }

  public getBaseClassesInDeclaration() {
    return '';
  }

  public getBaseClassesInDeclarationWithMultipleOrigins() {
    return '';
  }

  public getBaseClassesInDeclarationWithSingleOrigin() {
    return '';
  }

  public getInterfaceContentInDeclaration(inter: Interface) {
    return '';
  }

  public getModsDeclaration() {
    return '';
  }

  public getInterfaceInDeclaration(inter: Interface) {
    return '';
  }

  public getModsDeclarationWithMultipleOrigins() {}

  public getModsDeclarationWithSingleOrigin() {}

  public getCommonDeclaration() {
    return '';
  }

  public getDeclaration() {
    return '';
  }

  /**
   * src/app/core/api/SortingPd/index.ts
   */
  public getIndex() {
    return `
        import { ${this.dataSource.name} as DEF } from './models';
        import * as ${this.dataSource.name} from './Controllers';

        export { DEF, ${this.dataSource.name} };
      `;
  }

  /**
   * src/app/core/api/SortingPd/models.ts
   */
  public getBaseClassesIndex() {
    const classes = this.dataSource.baseClasses.map(base => {
      const T =
        base.templateArgs && base.templateArgs.length > 0
          ? `<${base.templateArgs.map((ignored, index) => `T${index}`).join(', ')}>`
          : '';

      const desc: string = base.description || '';

      return `
        /**
         * ${desc}
         */
        export class ${base.name}${T} {
          ${base.properties
            .map(p => p.toPropertyCodeWithInitValue(base.name + T).replace(/\*\/\n/, '*/\npublic '))
            .filter(id => id)
            .join('\n')}
            
            constructor(t: Partial<${base.name}${T}> = {}) {
              DtoUtil.keys(t).forEach(key => {
                const value = Reflect.get(t, key);
                if (!isNil(value)) {
                  switch (key) {
                  ${base.properties
                    .map(p => {
                      if (!['', 'number', 'string', 'boolean', 'Array', 'ObjectMap'].includes(p.dataType.typeName)) {
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

                      return "case '" + p.name + "':Reflect.set(this, key, value);break;";
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
        /* tslint:disable:no-any */
        import { isNil } from 'lodash-es';
        import { DtoUtil } from '@app/core/utils';
        
        // @ts-ignore
        type ObjectMap<K extends string | number | symbol = any, V = any> = {
          [key in K]: V;
        }

        export namespace ${this.dataSource.name} {
          ${classes.join('\n')}
        }
      `;
    }

    return classes.map(cls => `export ${cls}`).join('\n');
  }

  /**
   * src/app/core/api/SortingPd/Controllers/SortingParameterController/GetAllValues.ts
   */
  public getInterfaceContent(inter: Interface) {
    const bodyParmas: string = inter.getBodyParamsCode();

    let bodyInitValue: string = '{}';

    if (bodyParmas) {
      if (bodyParmas === 'object') {
        bodyInitValue = '{}';
      } else if (bodyParmas.startsWith('Array')) {
        bodyInitValue = '[]';
      } else if (bodyParmas) {
        bodyInitValue = `new ${bodyParmas}()`;
      }
    }

    const requestParams =
      (bodyParmas
        ? `params: Params = {}, body: ${bodyParmas} = ${bodyInitValue}`
        : `params: Params = {}, body: {} = {}`) + ', options: IRequestOptions = {},';

    return `
    /* tslint:disable:no-any */

    import { Observable } from 'rxjs';
    // @ts-ignore: TS6133
    import * as DEF from '../../models';
    import { httpClient, IRequestOptions } from '../../../http-client';

    export ${inter.getParamsCode()}

    /**
     * ${inter.description || ''}
     *
     * @param params Query params
     * @param body Body params
     * @param options Additional request options
     */
    export function ${inter.name}(${requestParams}): Observable<${
      inter.responseType === 'any' ? 'any' : inter.responseType.replace(/.*?ResponseResult</, '').slice(0, -1)
    }> {
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
    const desc: string = (mod.description || '').replace(/\n/g, '\n* ');

    return `
      /*
       * ${desc}
       */
      ${mod.interfaces
        .map(inter => {
          return `import { ${inter.name} } from './${inter.name}';`;
        })
        .join('\n')}

      export {
        ${mod.interfaces.map(inter => inter.name).join(',\n')}
      }
    `;
  }

  /**
   * src/app/core/api/SortingPd/Controllers/index.ts
   */
  public getModsIndex() {
    return `
      ${this.dataSource.mods
        .map(mod => {
          return `import * as ${mod.name} from './${mod.name}';`;
        })
        .join('\n')}

        export {
          ${this.dataSource.mods.map(mod => mod.name).join(',\n')}
        };
    `;
  }
}
