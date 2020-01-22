import { Component, OnInit } from '@angular/core';
import { Doc0307030402Service } from './service/doc-03-07-03-04-02.service';
import { Doc0307030401Service } from './service/doc-03-07-03-04-01.service';

@Component({
  selector: 'app--doc-03-07-03-04',
  templateUrl: './doc-03-07-03-04.component.html',
  providers: [
    Doc0307030401Service,
    {
      provide: Doc0307030402Service,
      /*
       * useFactory 的值是一个 factory function，
       * 这个 factory function 的参数也需要使用 DI 进行注入，
       * 这时候，我们必须使用 deps 指定参数对应的 token，
       * 即 useFactory 的参数必须跟 deps 中的 token 一一对应
       */
      useFactory: (doc0307030401Service: Doc0307030401Service) => {
        return new Doc0307030402Service(doc0307030401Service, 'BAR');
      },
      deps: [Doc0307030401Service],
    },
  ],
})
export class Doc03070304Component implements OnInit {
  constructor(private doc0307030402Service: Doc0307030402Service) {}

  public ngOnInit() {
    console.assert(this.doc0307030402Service.doSomething() === 'FOOBAR');
  }
}
