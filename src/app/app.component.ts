import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TitleService, VERSION as VERSION_ALAIN } from '@delon/theme';
import { NzModalService, VERSION as VERSION_ZORRO } from 'ng-zorro-antd';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor(
    elementRef: ElementRef,
    renderer2: Renderer2,
    private router: Router,
    private titleService: TitleService,
    private modalService: NzModalService,
  ) {
    renderer2.setAttribute(
      elementRef.nativeElement,
      'ng-alain-version',
      VERSION_ALAIN.full,
    );
    renderer2.setAttribute(
      elementRef.nativeElement,
      'ng-zorro-version',
      VERSION_ZORRO.full,
    );
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(evt => evt instanceof NavigationEnd))
      .subscribe(() => {
        this.titleService.setTitle();
        this.modalService.closeAll();
      });
  }
}
