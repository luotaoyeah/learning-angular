import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app--x-02-03-01',
  templateUrl: './x-02-03-01.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class X020301Component implements OnInit {
  public count: number = 0;

  public constructor(private changeDetectorRef: ChangeDetectorRef) {}

  public get runChangeDetection(): boolean {
    console.log(`[${X020301Component.name}]\n`, 'runChangeDetection()');
    return true;
  }

  public ngOnInit(): void {
    interval(1000)
      .pipe(
        take(10),
        tap((value) => {
          this.count = value;
          // `ChangeDetectorRef.detectChanges()` 方法, 立即触发当前组件及其下级组件的 change detection
          this.changeDetectorRef.detectChanges();
        }),
      )
      .subscribe();
  }
}
