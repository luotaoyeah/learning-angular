import {
  apply,
  applyTemplates,
  chain,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  SchematicsException,
  Source,
  Tree,
  url,
} from '@angular-devkit/schematics';
import { experimental, normalize, strings } from '@angular-devkit/core';
import { Schema } from './schema';

export function service(option: Schema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    // region 读取并解析 angular.json 文件
    const angularConfig: Buffer | null = tree.read('/angular.json');
    if (!angularConfig) {
      throw new SchematicsException(
        'COULD NOT FIND ANGULAR WORKSPACE CONFIGURATION',
      );
    }

    const workspace: experimental.workspace.WorkspaceSchema = JSON.parse(
      angularConfig.toString(),
    );
    // endregion

    // region 配置选项
    // region 如果没有指定 project, 则从 angular.json 中获取默认的 project
    if (!option.project) {
      option.project = workspace.defaultProject;
    }
    // endregion

    if (!option.project) {
      return tree;
    }

    // region 如果没有指定 path, 则从该 project 的配置中获取项目的根目录(app 或者 lib)
    const project: experimental.workspace.WorkspaceProject =
      workspace.projects[option.project];

    const projectType: string =
      project.projectType === 'application' ? 'app' : 'lib';

    if (!option.path) {
      option.path = `${project.sourceRoot}/${projectType}`;
    }
    // endregion
    // endregion

    const source: Source = apply(url('./files'), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: option.name,
      }),
      move(normalize(option.path)),
    ]);

    return chain([mergeWith(source)]);
  };
}
