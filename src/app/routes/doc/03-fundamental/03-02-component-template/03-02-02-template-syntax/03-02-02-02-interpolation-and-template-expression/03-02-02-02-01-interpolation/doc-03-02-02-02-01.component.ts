import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-02-01',
  templateUrl: './doc-03-02-02-02-01.component.html',
})
export class Doc0302020201Component implements OnInit {
  /*
   * 在 template 中使用 {{ expression }} 插入数据时，
   * angular 会首先计算 expression 的值，
   * 然后将结果转换为 string 类型，再显示到页面上，
   * 因此，可以通过覆写 toString() 方法，提供自定义的 string 类型转换方式
   */
  // tslint:disable-next-line:no-any
  public foo: any = {
    toString() {
      return '[[FOO]]';
    },
  };

  constructor() {}

  public getVal(): number {
    return 8;
  }

  public ngOnInit() {}
}
