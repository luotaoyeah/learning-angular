import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app--x-02-04',
  templateUrl: './x-02-04.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class X0204Component implements OnDestroy {
  public destory$ = new Subject();
  public subject$ = new Subject<number>();

  // 如果使用了 `AsyncPipe`,
  // 则当该 observable 每次吐出数据时, angular 都会帮我们调用 `ChangeDetectorRef.markForCheck` 方法,
  // 从而触发 change detection
  constructor() {
    interval(1000)
      .pipe(
        takeUntil(this.destory$),
        tap(() => {
          this.subject$.next(Date.now());
        }),
      )
      .subscribe();
  }

  get runChangeDetection(): boolean {
    console.log(`[${X0204Component.name}]\n`, 'runChangeDetection()');
    return true;
  }

  public ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }
}
