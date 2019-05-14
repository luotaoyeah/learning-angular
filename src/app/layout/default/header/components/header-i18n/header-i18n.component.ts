import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ALAIN_I18N_TOKEN, SettingsService } from '@delon/theme';
import { InputBoolean } from '@delon/util';

import { I18NService } from '@core';

@Component({
  selector: 'header-i18n',
  templateUrl: './header-i18n.component.html',
  styleUrls: ['./header-i18n.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderI18nComponent {
  /** Whether to display language text */
  @Input()
  @InputBoolean()
  public showLangText = true;

  get langs() {
    return this.i18NService.getLangs();
  }

  get curLangCode() {
    return this.settingsService.layout.lang;
  }

  constructor(
    private settingsService: SettingsService,
    @Inject(ALAIN_I18N_TOKEN)
    private i18NService: I18NService,
    @Inject(DOCUMENT)
    private document: Document,
  ) {}

  public changeLang(lang: string) {
    const spinEl = this.document.createElement('div');
    spinEl.setAttribute(
      'class',
      `page-loading ant-spin ant-spin-lg ant-spin-spinning`,
    );
    spinEl.innerHTML = `<span class="ant-spin-dot ant-spin-dot-spin"><i></i><i></i><i></i><i></i></span>`;
    this.document.body.appendChild(spinEl);

    this.i18NService.use(lang);
    this.settingsService.setLayout('lang', lang);
    setTimeout(() => this.document.location.reload());
  }
}
