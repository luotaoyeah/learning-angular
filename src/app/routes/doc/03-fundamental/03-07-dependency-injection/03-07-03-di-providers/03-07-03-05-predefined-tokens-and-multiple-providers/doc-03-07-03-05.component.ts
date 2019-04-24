import { Component, Inject, InjectionToken, OnInit } from '@angular/core';

const TOKEN = new InjectionToken<string | number | boolean>('some.token');

@Component({
  selector: 'app-doc-03-07-03-05',
  templateUrl: './doc-03-07-03-05.component.html',
  providers: [
    /*
     * 可以通过设置 multi: true 来给同一个 token 注册多个 provider，
     * 这样注册之后，在真正注入的时候，实际注入的对象是这几个 provider 返回的对象组成的数组
     */
    {
      provide: TOKEN,
      useFactory: () => {
        return 'FOO';
      },
      multi: true,
    },
    {
      provide: TOKEN,
      useFactory: () => {
        return 9;
      },
      multi: true,
    },
    {
      provide: TOKEN,
      useFactory: () => {
        return true;
      },
      multi: true,
    },
  ],
})
export class Doc03070305Component implements OnInit {
  constructor(@Inject(TOKEN) private token: Array<string | number | boolean>) {}

  ngOnInit() {
    console.assert(this.token.join('') === 'FOO9true');
  }
}
