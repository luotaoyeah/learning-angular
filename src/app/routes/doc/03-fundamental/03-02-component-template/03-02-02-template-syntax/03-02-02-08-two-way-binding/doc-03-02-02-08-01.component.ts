import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-08-01',
  template:
    '<p-button (onClick)="increase()" label="+"></p-button>&nbsp;<p-button (onClick)="decrease()" label="-"></p-button>',
})
export class Doc0302020801Component implements OnInit {
  /*
   * 如果使用 two-way binding 的语法糖？
   *     1. 需要有一个 @Input 属性和一个 @Output 属性
   *     2. @Output 属性的名称为 @Input 属性的名称 + Change 后缀
   */
  @Input() public fontSize = 0;
  @Output() public fontSizeChange: EventEmitter<number> = new EventEmitter();

  constructor() {}

  public ngOnInit() {}

  public decrease() {
    this.resize(-1);
  }

  public increase() {
    this.resize(1);
  }

  public resize(offset: number) {
    this.fontSize = Math.max(8, Math.min(18, this.fontSize + offset));
    this.fontSizeChange.emit(this.fontSize);
  }
}
