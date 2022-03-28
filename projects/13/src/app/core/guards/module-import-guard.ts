// https://angular.io/guide/styleguide#style-04-12

import { SafeAny } from '@src/typings';

export function throwIfAlreadyLoaded(parentModule: SafeAny, moduleName: string) {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}
