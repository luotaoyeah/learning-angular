import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-doc-03-03-06-05-02',
  templateUrl: './doc-03-03-06-05-02.component.html',
  styleUrls: ['./doc-03-03-06-05-02.component.less'],
  /*
   * `ViewEncapsulation.None` 表示不对组件的样式进行处理,
   * 组件的样式文件中定义的样式规则会被添加到全局的样式中, 对全局的样式起作用,
   * 因此, `:host` 将不再起作用
   */
  encapsulation: ViewEncapsulation.None,
})
export class Doc0303060502Component {}
