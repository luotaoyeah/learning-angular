import { ChangeDetectionStrategy, Component } from '@angular/core';
import { timer } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app--x-02-02',
  templateUrl: './x-02-02.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class X0202Component {
  public count: number = 0;

  constructor() {
    timer(10)
      .pipe(
        tap(() => {
          // 此处的修改不会被更新, 而是会等到下次 change detection 时才会更新
          this.count = 9;
        }),
      )
      .subscribe();
  }

  get runChangeDetection(): boolean {
    console.log(`[${X0202Component.name}]\n`, 'runChangeDetection()');
    return true;
  }

  // 当当前组件或者下级组件中触发 DOM 事件时, 会触发 change detection,
  // 注意是在事件处理函数执行完之后触发 change detection, 因此可以在事件处理函数中修改 binding 的值, 该修改会被更新
  public triggerClickEvent() {
    // 事件处理函数中可以没有修改逻辑, 但是依然会触发 change detection
  }

  public triggerClickEventAndChange() {
    ++this.count;
  }
}
