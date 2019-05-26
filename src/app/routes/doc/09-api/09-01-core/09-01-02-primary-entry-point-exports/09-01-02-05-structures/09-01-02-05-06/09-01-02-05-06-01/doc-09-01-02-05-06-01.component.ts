import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

/*
 * https://angular.io/api/core/ChangeDetectionStrategy#members
 */
@Component({
  selector: 'app-doc-09-01-02-05-06-01',
  templateUrl: './doc-09-01-02-05-06-01.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class Doc090102050601Component implements OnInit, OnDestroy {
  public count: number = 0;
  private subscription: Subscription | null = null;

  constructor() {}

  public ngOnInit(): void {
    this.subscription = interval(1000).subscribe((value: number) => {
      /*
       * 由于使用的是 ChangeDetectionStrategy.Default,
       * 因此, 此处对 this.count 进行赋值之后, angular 就会触发 change detection cycle,
       * 从而更新 template 中的 data binding
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
