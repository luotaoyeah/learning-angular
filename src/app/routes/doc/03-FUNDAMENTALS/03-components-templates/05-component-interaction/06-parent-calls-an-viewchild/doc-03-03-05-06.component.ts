import { Component, ViewChild } from '@angular/core';
import { Doc0303050601Component } from './doc-03-03-05-06.01.component';

/*
 * https://angular.io/guide/component-interaction#parent-calls-an-viewchild
 */
@Component({
  selector: 'app-doc-03-03-05-06',
  templateUrl: './doc-03-03-05-06.component.html',
})
export class Doc03030506Component {
  /*
   * 通过 template reference variable 访问子组件的实例, 这种方式有个缺点, 就是只能在 template 中访问, 无法在 component class 中访问,
   * 如果要在 component class 中访问, 可以使用 `@ViewChild()` 装饰器将子组件的实例注入到 component class 中
   */
  @ViewChild(Doc0303050601Component, { static: true })
  public doc0303050601ComponentRef!: Doc0303050601Component;

  public get result() {
    return this.doc0303050601ComponentRef.result;
  }

  public thumbUp() {
    this.doc0303050601ComponentRef.doVote('👍');
  }

  public thumbDown() {
    this.doc0303050601ComponentRef.doVote('👎');
  }
}
