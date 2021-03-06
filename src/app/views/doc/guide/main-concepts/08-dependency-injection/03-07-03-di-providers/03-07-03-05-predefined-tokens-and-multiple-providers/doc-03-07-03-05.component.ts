import { Component, Inject, OnInit } from '@angular/core';
import { SOME_TOKEN } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-03-di-providers/03-07-03-05-predefined-tokens-and-multiple-providers/service/doc-03-07-03-05.service';

@Component({
  selector: 'app--doc-03-07-03-05',
  templateUrl: './doc-03-07-03-05.component.html',
  providers: [
    /*
     * 可以通过设置 multi: true 来给同一个 token 注册多个 provider，
     * 这样注册之后，在注入的时候，实际注入的是这几个 provider 返回的对象组成的数组，
     * 这些多个 provider 要么都设置 multi: true，要么都不设置，否则编译错误
     */
    {
      provide: SOME_TOKEN,
      useValue: '9',
      multi: true,
    },
    {
      provide: SOME_TOKEN,
      useValue: 9,
      multi: true,
    },
  ],
})
export class Doc03070305Component implements OnInit {
  constructor(@Inject(SOME_TOKEN) private token: Array<string | number>) {}

  public ngOnInit() {
    console.assert(this.token.join('') === '99');
  }
}
