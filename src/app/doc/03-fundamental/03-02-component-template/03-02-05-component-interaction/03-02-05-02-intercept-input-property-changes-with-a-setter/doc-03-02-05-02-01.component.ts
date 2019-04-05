import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-05-02-01',
  template: `
    <p-button [label]="foo"></p-button>
    &nbsp;
    <p-button [label]="bar"></p-button>
  `,
})
export class Doc0302050201Component implements OnInit {
  @Input() foo = '';

  // tslint:disable-next-line:variable-name
  private _bar = '';

  /*
   * 除了可以将普通的 property 标识为 input property 之外，
   * 还可以将 property setter（注意不是 getter） 标识为 input property，
   * 这样，在 setter 函数中可以对输入的数据进行进一步的处理，
   * 实现对 input property 的一个拦截处理
   */
  @Input()
  set bar(value: string) {
    this._bar = (value && value.trim().toUpperCase()) || '<DEFAULT BAR>';
  }

  get bar(): string {
    return this._bar;
  }

  constructor() {}

  ngOnInit() {}
}
