import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TitleService, VERSION as VERSION_ALAIN } from '@delon/theme';
import { NzModalService, VERSION as VERSION_ZORRO } from 'ng-zorro-antd';
import { Doc0306080201Service } from './routes/doc/03-FUNDAMENTALS/07-ngmodules/03-06-08-singleton-services/03-06-08-02-the-for-root-pattern/doc-03-06-08-02-01/service/doc-03-06-08-02-01.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    elementRef: ElementRef,
    renderer2: Renderer2,
    private router: Router,
    private titleService: TitleService,
    private modalService: NzModalService,
    private doc0306080201Service: Doc0306080201Service,
  ) {
    renderer2.setAttribute(elementRef.nativeElement, 'ng-alain-version', VERSION_ALAIN.full);
    renderer2.setAttribute(elementRef.nativeElement, 'ng-zorro-version', VERSION_ZORRO.full);
  }

  public ngOnInit() {
    this.router.events.pipe(filter(evt => evt instanceof NavigationEnd)).subscribe(() => {
      this.titleService.setTitle();
      this.modalService.closeAll();
    });

    // @ts-ignore
    window.DOC_0306080201_SERVICE_01 = this.doc0306080201Service;
  }
}
