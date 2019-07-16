import { Component } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { Doc0303080401Component } from '../04-example-a-popup-service/01/doc-03-03-08-04.01.component';

/*
 * https://angular.io/guide/elements#typings-for-custom-elements
 */
@Component({
  selector: 'app-doc-03-03-08-05',
  templateUrl: './doc-03-03-08-05.component.html',
})
export class Doc03030805Component {
  constructor() {
    /*
     * 对于 custom element, ts 无法正确地推断它的类型信息, 所以有两种方式来解决:
     *   1. 显式地声明类型信息, 如下
     *   2. 对 HTMLElementTagNameMap 类型进行增强, 如文件最底部的类型定义信息
     */
    const el01: NgElement & WithProperties<Pick<Doc0303080401Component, 'message'>> | null = document.querySelector(
      'app-doc-03-03-08-04-01-element',
    );
    const el02 = document.querySelector('app-doc-03-03-08-04-01-element');

    console.assert(el01 === el02);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-doc-03-03-08-04-01-element': NgElement & WithProperties<Pick<Doc0303080401Component, 'message'>>;
  }
}
