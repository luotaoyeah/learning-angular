import { Component } from '@angular/core';

@Component({
  selector: 'app--doc-03-03-06-04-02',
  templateUrl: './doc-03-03-06-04-02.component.html',
  styles: [
    `
      button {
        color: yellow;
      }
    `,
  ],
  /*
   * 使用 `styleUrls` 选项引入多个外部的样式文件, 对于相同的样式规则, 后面的优先级要高于前面的,
   * 当 `styles` 跟 `styleUrls` 同时使用时, 对于相同的样式规则, `styleUrls` 中的优先级要高于 `styles` 中的
   */
  styleUrls: ['./doc-03-03-06-04-02.component.less', './doc-03-03-06-04-02.component.css'],
})
export class Doc0303060402Component {}
