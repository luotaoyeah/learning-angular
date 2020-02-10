import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app--doc-03-03-06-05-03',
  templateUrl: './doc-03-03-06-05-03.component.html',
  styleUrls: ['./doc-03-03-06-05-03.component.less'],
  /*
   * `ViewEncapsulation.ShadowDom` 表示使用原生的 shadow DOM 来对组件视图进行封装,
   * 因此 :host 依然有效,
   * 由于某些浏览器尚不支持原生的 shadow DOM, 因此 `encapsulation` 选项默认为 `ViewEncapsulation.Emulated`
   */
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Doc0303060503Component {}
