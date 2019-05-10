import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-05-04-01',
  template: `
    <p>
      <p-button [label]="'👍'" (onClick)="doVote('👍')"></p-button>
      &nbsp;
      <p-button [label]="'👎'" (onClick)="doVote('👎')"></p-button>
    </p>
  `,
})
export class Doc0302050401Component implements OnInit {
  /*
   * 子组件如何跟父组件通信？
   * 通过 @Output() 装饰器标识 output properties，
   * output property 是一个 EventEmitter 对象，通过调用 EventEmitter.emit() 方法，发出一个事件，
   * 父组件可以监听这个事件（event binding）
   */
  @Output() public vote: EventEmitter<string> = new EventEmitter();

  constructor() {}

  public ngOnInit() {}

  public doVote(result: string) {
    this.vote.emit(result);
  }
}
