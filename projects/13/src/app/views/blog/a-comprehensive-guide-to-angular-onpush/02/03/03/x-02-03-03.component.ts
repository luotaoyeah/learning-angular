import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app--x-02-03-03',
  templateUrl: './x-02-03-03.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class X020303Component implements OnInit {
  public count: number = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  get runChangeDetection(): boolean {
    console.log(`[${X020303Component.name}]\n`, 'runChangeDetection()');
    return true;
  }

  public ngOnInit(): void {
    interval(1000)
      .pipe(
        take(10),
        tap((value) => {
          this.count = value;

          // 我们已经知道, 当使用 `OnPush` 策略时, 有两种情况会自动将组件标记为 dirty,
          //   1. 当 input reference 发生变更
          //   2. 当 DOM 事件触发
          //
          // `ChangeDetectorRef.markForCheck()` 方法, 提供了第三种方式, 手动将组件标记为 dirty,
          // 在本次或者下次 change detection 中, 被标记为 dirty 的组件会被更新
          this.changeDetectorRef.markForCheck();
        }),
      )
      .subscribe();
  }
}
