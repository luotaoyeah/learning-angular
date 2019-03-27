import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-fundamental-component-template-displaying-data03',
  template: `
    <p-accordionTab header="Constructor or Variable Initialization ?" [transitionOptions]="'0ms'">
      <p>组件中的属性可以在定义属性时就进行初始化：{{ foo }}</p>
      <p>也可以在构造函数（constructor）中进行赋值：{{ bar }}</p>
    </p-accordionTab>
  `
})
export class DocFundamentalComponentTemplateDisplayingData03Component implements OnInit {
  foo = 'FOO';
  bar: string;

  constructor() {
    this.bar = 'BAR';
  }

  ngOnInit() {}
}
