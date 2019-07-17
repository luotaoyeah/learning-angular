import { Injectable } from '@angular/core';
import { Doc0307030401Service } from './doc-03-07-03-04-01.service';

@Injectable()
export class Doc0307030402Service {
  /*
   * 有的时候，一个 service 又依赖了另外一个 service，如下 Doc0307030402Service 依赖了 Doc0307030401Service，
   * 此时，这个依赖的 service 可以使用 DI 正确地被注入，
   * 同时，这个 service 还依赖了其他的某些参数，如下的 bar，
   * 而这个参数 bar 不能使用 DI 来进行注入，如何解决？
   * 答案是使用 factory provider，
   * 即我们在注册这个 service 到 injector 时，不要使用 useClass 的方式，而是使用 useFactory 的方式
   */
  constructor(private doc0307030401Service: Doc0307030401Service, private bar: string) {}

  public doSomething(): string {
    return this.doc0307030401Service.foo + this.bar;
  }
}
