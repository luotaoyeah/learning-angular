import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  RouteConfigLoadStart,
  Router,
} from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { updateHostClass } from '@delon/util';
import { SettingsService } from '@delon/theme';

@Component({
  selector: 'layout-default',
  templateUrl: './default.component.html',
})
export class LayoutDefaultComponent
  implements OnInit, AfterViewInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  isFetching = false;

  constructor(
    router: Router,
    // tslint:disable-next-line:variable-name
    _message: NzMessageService,
    private settings: SettingsService,
    private el: ElementRef,
    private renderer: Renderer2,
    // tslint:disable-next-line:no-any
    @Inject(DOCUMENT) private doc: any,
  ) {
    // scroll to top in change page
    router.events.pipe(takeUntil(this.unsubscribe$)).subscribe(evt => {
      if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
        this.isFetching = true;
      }
      if (evt instanceof NavigationError || evt instanceof NavigationCancel) {
        this.isFetching = false;
        if (evt instanceof NavigationError) {
          _message.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
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

  private setClass() {
    const { el, doc, renderer, settings } = this;
    const layout = settings.layout;
    updateHostClass(el.nativeElement, renderer, {
      ['alain-default']: true,
      [`alain-default__fixed`]: layout.fixed,
      [`alain-default__collapsed`]: layout.collapsed,
    });

    doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
  }

  ngAfterViewInit(): void {}

  ngOnInit() {
    const { settings, unsubscribe$ } = this;
    settings.notify
      .pipe(takeUntil(unsubscribe$))
      .subscribe(() => this.setClass());
    this.setClass();
  }

  ngOnDestroy() {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
