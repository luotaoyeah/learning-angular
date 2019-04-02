import { AfterContentChecked, AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { Doc0302040802Component } from './doc-03-02-04-08-02.component';

@Component({
  selector: 'app-doc-03-02-04-08-01',
  templateUrl: './doc-03-02-04-08-01.component.html'
})
export class Doc0302040801Component implements OnInit, AfterContentInit, AfterContentChecked {
  /*
   * 通过 @ContentChild() 装饰器获取到 content child 对象实例的引用
   */
  @ContentChild(Doc0302040802Component) contentChild!: Doc0302040802Component;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    console.assert(this.contentChild.foo === 'FOO');
  }

  ngAfterContentChecked(): void {
    console.assert(this.contentChild.foo === 'FOO');
  }
}
