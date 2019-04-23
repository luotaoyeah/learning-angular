import { Component, Inject, OnInit } from '@angular/core';
import {
  CONFIG_01,
  CONFIG_TOKEN_01,
  CONFIG_TOKEN_02,
  IConfig,
} from './doc-03-07-03-03-01-config';

@Component({
  selector: 'app-doc-03-07-03-03-01',
  templateUrl: './doc-03-07-03-03-01.component.html',
  providers: [
    {
      provide: CONFIG_TOKEN_01,
      useValue: CONFIG_01,
    },
  ],
})
export class Doc0307030301Component implements OnInit {
  /*
   * 当我们注入一个 service 时，injector 如何知道该根据哪个 token 来寻找对应的 provider 呢？
   * 默认的，injector 会使用参数的类型，也就是 service class 作为 token 来寻找 provider，
   * 但是对于其他类型的依赖注入，需要使用 @Inject() 装饰器显式地指定 token，
   * 如下，参数 config01 的类型是 IConfig 接口，而接口是不能够作为 token 的，
   * 所以我们需要显式地使用 @Inject() 指定对应的 token
   */
  constructor(
    @Inject(CONFIG_TOKEN_01) private config01: IConfig,
    @Inject(CONFIG_TOKEN_02) private config02: IConfig,
  ) {}

  ngOnInit() {
    console.assert(this.config01.value === 'BAR');
    console.assert(this.config02.value === 'BAZ');
  }
}
