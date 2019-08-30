import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-doc-03-03-06-05-01',
  templateUrl: './doc-03-03-06-05-01.component.html',
  styleUrls: ['./doc-03-03-06-05-01.component.css'],
  /*
   * `encapsulation` 选项的默认值为 `ViewEncapsulation.Emulated`,
   * 它模拟了原生的 shadow DOM, 通过给当前组件元素添加一个全局唯一的 attribute, 并对 CSS 规则进行处理,
   * 从而将这些 CSS 限制只对这个当前组件元素有效
   */
  encapsulation: ViewEncapsulation.Emulated,
})
export class Doc0303060501Component {}
