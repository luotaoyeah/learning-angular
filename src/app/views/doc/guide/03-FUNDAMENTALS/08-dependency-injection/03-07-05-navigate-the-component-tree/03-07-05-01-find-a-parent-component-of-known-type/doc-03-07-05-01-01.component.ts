import { Component, OnInit, Optional } from '@angular/core';
import { Doc03070501Component } from '@app/views/doc/guide/03-FUNDAMENTALS/08-dependency-injection/03-07-05-navigate-the-component-tree/03-07-05-01-find-a-parent-component-of-known-type/doc-03-07-05-01.component';

@Component({
  selector: 'app--doc-03-07-05-01-01',
  template: '',
})
export class Doc0307050101Component implements OnInit {
  /*
   * 知道 parent component 的类型，直接注入，
   * 因为在 injector hierarchy 中，每个 component 的 injector 都会把该 component 自己注册进来，
   * 注册时使用的 token 就是该 component 的 class，
   * 因此在 child component 中就可以直接通过 parent component class 注入
   */
  constructor(@Optional() private doc03070501Component: Doc03070501Component) {}

  public ngOnInit() {
    console.assert(this.doc03070501Component.foo === 'FOO');
  }
}
