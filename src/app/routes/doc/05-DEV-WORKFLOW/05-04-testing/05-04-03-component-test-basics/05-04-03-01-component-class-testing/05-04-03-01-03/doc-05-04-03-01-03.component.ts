import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-doc-05-04-03-01-03',
  templateUrl: './doc-05-04-03-01-03.component.html',
})
export class Doc0504030103Component implements OnInit {
  public currentLang: string = '';

  constructor(private translateService: TranslateService) {}

  public ngOnInit() {
    this.currentLang =
      this.translateService.getDefaultLang() === 'zh-CN'
        ? '简体中文'
        : '其他语言';
  }
}
