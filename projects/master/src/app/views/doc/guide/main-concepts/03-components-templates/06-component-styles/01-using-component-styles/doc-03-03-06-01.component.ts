import { Component } from '@angular/core';

/*
 * https://angular.io/guide/component-styles#using-component-styles
 */
@Component({
  selector: 'app--doc-03-03-06-01',
  templateUrl: './doc-03-03-06-01.component.html',
  /*
   * 可以直接通过 Component.styles 选项添加多个 CSS 样式
   */
  styles: [
    `
      div {
        color: #ff0000;
        display: inline-block;
        width: 200px;
        text-align: center;
      }
    `,
    `
      .foo {
        padding: 10px;
        border-radius: 3px;
        border: 1px solid #ff0000;
      }
    `,
  ],
})
export class Doc03030601Component {}
