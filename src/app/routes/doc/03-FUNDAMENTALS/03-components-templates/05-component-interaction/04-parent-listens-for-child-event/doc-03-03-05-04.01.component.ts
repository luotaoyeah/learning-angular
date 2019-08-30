import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-doc-03-03-05-04-01',
  templateUrl: './doc-03-03-05-04.01.component.html',
})
export class Doc0303050401Component {
  /*
   * 子组件通过 `@Output()` 装饰器标识一个 output property, output property 是一个 `EventEmitter` 对象,
   * 子组件通过调用 `EventEmitter.emit()` 方法, 发出一个事件,
   * 父组件通过 event binding 监听这个事件
   */
  @Output()
  public vote: EventEmitter<string> = new EventEmitter();

  public doVote(result: string) {
    this.vote.emit(result);
  }
}
