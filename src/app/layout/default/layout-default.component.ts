import { Component, OnDestroy } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, RouteConfigLoadStart, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'layout-default',
  templateUrl: './layout-default.component.html',
})
export class LayoutDefaultComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();
  public isFetching: boolean = false;

  constructor(router: Router, messageService: NzMessageService) {
    // scroll to top in change page
    router.events.pipe(takeUntil(this.unsubscribe$)).subscribe(evt => {
      if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
        this.isFetching = true;
      }

      if (evt instanceof NavigationError || evt instanceof NavigationCancel) {
        this.isFetching = false;
        if (evt instanceof NavigationError) {
          messageService.error(`无法加载${evt.url}路由`, {
            nzDuration: 1000 * 3,
          });
        }
        return;
      }

      if (!(evt instanceof NavigationEnd)) {
        return;
      }

      setTimeout(() => {
        this.isFetching = false;
      }, 100);
    });
  }

  public ngOnDestroy() {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
