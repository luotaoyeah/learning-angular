import { Component } from '@angular/core';

@Component({
  selector: 'app-doc-03-03-06-04-01',
  templateUrl: './doc-03-03-06-04-01.component.html',
  /*
   * 通过 styles 选项, 添加一组样式规则, 等价于将这些规则直接定义在组件的样式文件中
   */
  styles: [
    `
      p {
        color: #ff0000;
      }
    `,
    `
      :host button {
        color: #00f;
        border-color: #00f;
      }
    `,
  ],
})
export class Doc0303060401Component {}
