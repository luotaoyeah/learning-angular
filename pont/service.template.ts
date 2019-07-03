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
      'BaseClass.ts': generator.getBaseClassesIndex.bind(generator),
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
        .map((ignored, index) => `T${index} = any`)
        .join(', ')}> {
        ${base.properties
          .map(prop =>
            prop.toPropertyCode(true).replace(/\*\/\n/, '*/\npublic '),
          )
          .join('\n')}
      }
      `;
    }
    return `class ${base.name} {
      ${base.properties
        .map(prop => prop.toPropertyCode(true).replace(/\*\/\n/, '*/\npublic '))
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
    const bodyParmas = inter.getBodyParamsCode();
    const requestParams = bodyParmas
      ? `params: Params, bodyParams: ${bodyParmas}`
      : `params: Params`;

    return `
      export ${inter.getParamsCode()}
      
      export function request(${requestParams}): Observable<${
      inter.responseType
    }>;
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
           * ${mod.description}
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
        * ${inter.description}
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
    return '';
  }

  /**
   * src/app/core/api/SortingPd/api.d.ts
   */
  public getDeclaration() {
    return `
      /* tslint:disable:no-any */
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
      import * as DEFS from './BaseClass';
      import './Controllers/';

      export const DEFS = DEFS;
    `;

    if (this.dataSource.name) {
      conclusion = `
        import { ${this.dataSource.name} as DEFS } from './BaseClass';
        export { ${this.dataSource.name} } from './Controllers/';
        export { DEFS };
      `;
    }

    return conclusion;
  }

  /**
   * src/app/core/api/SortingPd/BaseClass.ts
   */
  public getBaseClassesIndex() {
    const clsCodes = this.dataSource.baseClasses.map(
      base => `
        class ${base.name} {
          ${base.properties
            .map(prop => {
              return prop
                .toPropertyCodeWithInitValue(base.name)
                .replace(/\*\/\n/, '*/\npublic ');
            })
            .filter(id => id)
            .join('\n')}
        }
      `,
    );

    if (this.dataSource.name) {
      return `
        ${clsCodes.join('\n')}
        export const ${this.dataSource.name} = {
          ${this.dataSource.baseClasses.map(bs => bs.name).join(',\n')}
        }
      `;
    }

    return clsCodes.map(cls => `export ${cls}`).join('\n');
  }

  /**
   * src/app/core/api/SortingPd/Controllers/sortingParameter/GetAllValues.ts
   */
  public getInterfaceContent(inter: Interface) {
    const bodyParmas = inter.getBodyParamsCode();
    const requestParams = bodyParmas ? `params, bodyParams` : `params`;

    return `
    /**
     * @desc ${inter.description}
     */

    import { Observable } from 'rxjs';
    import { DEFS } from '../../api';
    import pontFetch from 'src/utils/pontFetch';

    export ${inter.getParamsCode()}

    export function request(${requestParams}): Observable<${
      inter.responseType
    }> {
      return pontFetch({
        url: '${inter.path}',
        ${bodyParmas ? 'params: bodyParams' : 'params'},
        method: '${inter.method}',
      });
    }
   `;
  }

  /**
   * src/app/core/api/SortingPd/Controllers/sortingParameter/index.ts
   */
  public getModIndex(mod: Mod) {
    return `
      /**
       * @description ${mod.description}
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
