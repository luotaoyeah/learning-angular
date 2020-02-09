import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, RouteConfigLoadStart, Router } from '@angular/router';
import { Doc0306080201Service } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-08-singleton-services/03-06-08-02-the-for-root-pattern/doc-03-06-08-02-01/service/doc-03-06-08-02-01.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { VERSION as VERSION_ZORRO } from 'ng-zorro-antd/version';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app--root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  public isFetching: boolean = false;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private router: Router,
    messageService: NzMessageService,
    elementRef: ElementRef,
    renderer2: Renderer2,
    private modalService: NzModalService,
    private doc0306080201Service: Doc0306080201Service,
  ) {
    renderer2.setAttribute(elementRef.nativeElement, 'ng-zorro-version', VERSION_ZORRO.full);

    this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((evt) => {
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

  public ngOnInit() {
    this.router.events.pipe(filter((evt) => evt instanceof NavigationEnd)).subscribe(() => {
      this.modalService.closeAll();
    });

    // @ts-ignore
    window.DOC_0306080201_SERVICE_01 = this.doc0306080201Service;
  }
}
