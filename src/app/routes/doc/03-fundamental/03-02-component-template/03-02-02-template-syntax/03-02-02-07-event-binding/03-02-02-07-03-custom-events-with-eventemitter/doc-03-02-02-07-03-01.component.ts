import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-07-03-01',
  template:
    '<p-button label="$event" (onClick)="someCustomEvent.emit({foo:\'FOO\'})"></p-button>',
})
export class Doc030202070301Component implements OnInit {
  /*
   * 使用 @Output 装饰器，将一个属性标识为一个事件，
   * 通过调用 EventEmitter.emit() 方法，触发一个事件
   */
  @Output() public someCustomEvent: EventEmitter<{
    foo: string;
  }> = new EventEmitter();

  constructor() {}

  public ngOnInit() {}
}
