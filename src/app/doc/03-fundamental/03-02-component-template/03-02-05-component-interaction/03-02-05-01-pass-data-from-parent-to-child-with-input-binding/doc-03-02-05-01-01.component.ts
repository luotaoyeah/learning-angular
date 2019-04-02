import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-05-01-01',
  template: `
    <p-button [label]="foo"></p-button>
    &nbsp;
    <p-button [label]="bar"></p-button>
  `
})
export class Doc0302050101Component implements OnInit {
  /*
   * 父组件如何向子组件传递数据？
   * 通过 @Input() 装饰器，设置 input properties（input binding）
   */
  @Input() foo = '';
  // tslint:disable-next-line:no-input-rename
  @Input('myBar') bar = '';

  constructor() {}

  ngOnInit() {}
}
