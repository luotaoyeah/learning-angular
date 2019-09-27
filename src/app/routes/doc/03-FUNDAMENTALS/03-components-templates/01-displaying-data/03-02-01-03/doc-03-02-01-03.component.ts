import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-01-03',
  template: `
    <p>组件中的属性可以在定义属性时就进行初始化：{{ foo }}</p>
    <p>也可以在构造函数（constructor）中进行赋值：{{ bar }}</p>
  `,
})
export class Doc03020103Component implements OnInit {
  public foo = 'FOO';
  public bar: string;

  constructor() {
    this.bar = 'BAR';
  }

  public ngOnInit() {}
}
