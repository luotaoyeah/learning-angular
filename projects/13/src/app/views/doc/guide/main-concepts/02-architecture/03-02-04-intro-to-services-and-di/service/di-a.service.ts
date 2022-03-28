import { Injectable } from '@angular/core';

/*
 * 使用 @Injectable 装饰器，将一个类标识为一个 injectable 对象，
 * injectable 对象将会由 angular 中的各种 injector 来进行管理，
 * 在 injector 中会维护它自己的一个 provider cache，
 * 当需要使用该 injector 进行依赖注入时，injector 会首先看自己的 cache 中，
 * 是否已经存在该依赖的实例，如果存在则直接注入，
 * 否则，会先使用 provider 创建对应的实例，放入 cache，然后注入
 */
@Injectable()
export class DiAService {
  public test(): void {
    console.log('WORKS');
  }
}
