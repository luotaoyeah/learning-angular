import { Component, Inject, OnInit } from '@angular/core';
import {
  Bar,
  Foo,
  SOME_TOKEN_01,
  SOME_TOKEN_02,
  SOME_TOKEN_03,
  SOME_TOKEN_04,
} from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-05-define-dependencies-with-providers/service/doc-03-07-04-05.service';

@Component({
  selector: 'app--doc-03-07-04-05',
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
    /*
     * 在什么场景下可以使用 useFactory 呢？
     * 通常，当某个 service 的 constructor 的参数中，既包含注入的依赖，也包含普通的参数时，
     * 因为普通的参数无法通过 DI 注入，此时就可以使用 useFactory 方式，
     * useFactory 的参数同样可以注入，此时需要通过 deps 给这些需要注入的参数，声明他们对应的 token
     */
    {
      provide: SOME_TOKEN_04,
      useFactory: (foo: Foo) => {
        return new Bar('BAR', foo);
      },
      /*
       * deps 表示的是 token 列表，
       * 这些 token 对应的 provider 返回的值会作为参数传给 useFactory() 方法
       */
      deps: [SOME_TOKEN_03],
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
    @Inject(SOME_TOKEN_04)
    private token04: Bar,
  ) {}

  public ngOnInit() {
    console.assert(this.token01 === 'FOO');
    console.assert(this.token02.foo === 'FOO');
    console.assert(this.token03 === this.token02);
    console.assert(this.token04.bar === 'FOOBAR');
  }
}
