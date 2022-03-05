import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app--custom-events-with-eventemitter-01',
  template: `<button (click)="onClick()" [style]="{ borderRadius: '3px' }">CLICK</button>`,
})
export class CustomEventsWithEventemitter01Component {
  /*----------------------------------------------------------------------------------------------------
   * 使用 @Output() 装饰一个 EventEmitter 类型的属性，调用 EventEmitter.emit() 方法时，触发该事件，
   * EventEmitter.emit() 方法只支持 0 或者 1 个参数，不支持多个参数
   *----------------------------------------------------------------------------------------------------*/
  @Output()
  public someCustomEvent: EventEmitter<string> = new EventEmitter<string>();

  public onClick() {
    this.someCustomEvent.emit('foo');
  }
}
