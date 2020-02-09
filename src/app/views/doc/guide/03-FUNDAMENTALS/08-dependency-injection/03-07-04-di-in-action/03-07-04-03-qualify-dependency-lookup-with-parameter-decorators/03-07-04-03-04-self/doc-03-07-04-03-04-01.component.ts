import { Component, Inject, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { STORE_TOKEN } from '@app/views/doc/guide/03-FUNDAMENTALS/08-dependency-injection/03-07-04-di-in-action/03-07-04-03-qualify-dependency-lookup-with-parameter-decorators/03-07-04-03-04-self/service/doc-03-07-04-03-04-01.service';

@Component({
  selector: 'app--doc-03-07-04-03-04-01',
  template: '',
  providers: [
    {
      provide: STORE_TOKEN,
      useFactory: (): Storage => window.sessionStorage,
    },
  ],
})
export class Doc030704030401Component implements OnInit {
  constructor(
    /*
     * @SkipSelf() 装饰器的作用是，
     * 跳过 local injector，从 parent injector 开始寻找，
     */
    @SkipSelf()
    @Inject(STORE_TOKEN)
    @Optional()
    private localStorage: Storage,
    /*
     * @Self() 装饰器的作用是，
     * 只在 local injector 中寻找，不往上级去寻找
     */
    @Self()
    @Inject(STORE_TOKEN)
    @Optional()
    private sessionStorage: Storage,
  ) {}

  public ngOnInit() {
    console.assert(this.localStorage === window.localStorage);
    console.assert(this.sessionStorage === window.sessionStorage);
  }
}
