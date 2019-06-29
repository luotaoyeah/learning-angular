// https://angular.io/guide/styleguide#style-04-12
// tslint:disable-next-line:no-any
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(
      `${moduleName} has already been loaded. Import Core modules in the AppModule only.`,
    );
  }
}
