import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/*
 * https://github.com/ngx-translate/core#how-to-handle-missing-translations
 */
@Component({
  selector: 'app-ngx-translate-05',
  templateUrl: './ngx-translate-05.component.html',
})
export class NgxTranslate05Component implements OnInit {
  constructor(private translateService: TranslateService) {}

  public ngOnInit() {
    this.translateService.instant('undefined.i18n.key');
  }
}
