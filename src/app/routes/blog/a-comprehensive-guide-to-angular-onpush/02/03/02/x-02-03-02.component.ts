import { ApplicationRef, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app--x-02-03-02',
  templateUrl: './x-02-03-02.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class X020302Component implements OnInit {
  public count: number = 0;

  constructor(private applicationRef: ApplicationRef) {}

  get runChangeDetection(): boolean {
    console.log(`[${X020302Component.name}]\n`, 'runChangeDetection()');
    return true;
  }

  public ngOnInit(): void {
    interval(1000)
      .pipe(
        take(10),
        tap((value) => {
          this.count = value;
          // `ApplicationRef.tick()` 方法, 触发整个应用的 change detection
          this.applicationRef.tick();
        }),
      )
      .subscribe();
  }
}
