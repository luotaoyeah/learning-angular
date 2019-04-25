import { Component, Inject, OnInit } from '@angular/core';
import {
  Foo,
  SOME_TOKEN_01,
  SOME_TOKEN_02,
  SOME_TOKEN_03,
} from './service/doc-03-07-04-05.service';

@Component({
  selector: 'app-doc-03-07-04-05',
  templateUrl: './doc-03-07-04-05.component.html',
  providers: [
    {
      provide: SOME_TOKEN_01,
      useValue: 'FOO',
    },
    {
      provide: SOME_TOKEN_02,
      useClass: Foo,
    },
    /*
     * useExisting 的作用是，让多个不同的 token 共用一个 provider，
     * 或者说，给某个 token 起了一个别名（alias），使用这个别名获取到的是同样的实例，
     * useExisting 后面的值是一个 token
     */
    {
      provide: SOME_TOKEN_03,
      useExisting: SOME_TOKEN_02,
    },
  ],
})
export class Doc03070405Component implements OnInit {
  constructor(
    @Inject(SOME_TOKEN_01)
    private token01: string,
    @Inject(SOME_TOKEN_02)
    private token02: Foo,
    @Inject(SOME_TOKEN_03)
    private token03: Foo,
  ) {}

  ngOnInit() {
    console.assert(this.token01 === 'FOO');
    console.assert(this.token02.foo === 'FOO');
    console.assert(this.token02 === this.token03);
  }
}
