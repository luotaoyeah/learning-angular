import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

/*
 * https://angular.io/api/core/ChangeDetectionStrategy#members
 */
@Component({
  selector: 'app-doc-09-01-02-05-06-02',
  templateUrl: './doc-09-01-02-05-06-02.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Doc090102050602Component implements OnInit, OnDestroy {
  public count: number = 0;
  private subscription: Subscription | null = null;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  public ngOnInit(): void {
    interval(5000)
      .pipe(delay(1000))
      .subscribe(() => {
        /*
         * 可以注入 ChangeDetectorRef 然后手动调用 ChangeDetectorRef.detectChanges() 方法,
         * 从而触发 change detection cycle
         */
        this.changeDetectorRef.detectChanges();
      });

    this.subscription = interval(1000).subscribe((value: number) => {
      /*
       * 由于使用的是 ChangeDetectionStrategy.OnPush,
       * 因此此处对 this.count 进行赋值之后, angular 不会触发 change detection cycle,
       * 从而不会更新 template 中的 data binding
       */
      this.count = value;
    });
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
