import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ALAIN_I18N_TOKEN, SettingsService } from '@delon/theme';
import { InputBoolean } from '@delon/util';
import { I18NService } from '@app/core';

@Component({
  selector: 'header-i18n',
  templateUrl: './header-i18n.component.html',
})
export class HeaderI18nComponent {
  /** whether to display language text */
  @Input()
  @InputBoolean()
  public showLangText: boolean = true;

  get langs() {
    return this.i18NService.getLangs();
  }

  get currentLangCode() {
    return this.settingsService.layout.lang;
  }

  constructor(
    private settingsService: SettingsService,
    @Inject(ALAIN_I18N_TOKEN)
    private i18NService: I18NService,
    @Inject(DOCUMENT)
    private doc: Document,
  ) {}

  public changeLang(lang: string) {
    const spinEl: HTMLDivElement = this.doc.createElement('div');
    spinEl.setAttribute('class', `page-loading ant-spin ant-spin-lg ant-spin-spinning`);
    spinEl.innerHTML = `<i nz-icon="" style="font-size: 36px;" nzType="loading" class="anticon anticon-loading ng-star-inserted">
                          <svg viewBox="0 0 1024 1024" fill="currentColor" width="1em" height="1em" data-icon="loading" aria-hidden="true" class="anticon-spin">
                            <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
                          </svg>
                        </i>`;
    this.doc.body.appendChild(spinEl);

    this.i18NService.use(lang);
    this.settingsService.setLayout('lang', lang);
    setTimeout(() => this.doc.location.reload());
  }
}
