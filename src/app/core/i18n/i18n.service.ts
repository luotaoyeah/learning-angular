// 请参考：https://ng-alain.com/docs/i18n
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { registerLocaleData } from '@angular/common';
import ngZh from '@angular/common/locales/zh';
import ngEn from '@angular/common/locales/en';

import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd';
import * as df_en from 'date-fns/locale/en';
import * as df_zh_cn from 'date-fns/locale/zh_cn';
import { TranslateService } from '@ngx-translate/core';
import {
  AlainI18NService,
  DelonLocaleService,
  en_US as delonEnUS,
  FullLocaleData,
  SettingsService,
  zh_CN as delonZhCn,
} from '@delon/theme';

interface LangData {
  text: string;
  // tslint:disable-next-line:no-any
  ng: any;
  // tslint:disable-next-line:no-any
  zorro: any;
  // tslint:disable-next-line:no-any
  dateFns: any;
  // tslint:disable-next-line:no-any
  delon: FullLocaleData;
  abbr: string;
}

const DEFAULT = 'zh-CN';
const LANGS: { [key: string]: LangData } = {
  'zh-CN': {
    text: '简体中文',
    ng: ngZh,
    zorro: zh_CN,
    dateFns: df_zh_cn,
    delon: delonZhCn,
    abbr: 'CN',
  },
  'en-US': {
    text: 'English',
    ng: ngEn,
    zorro: en_US,
    dateFns: df_en,
    delon: delonEnUS,
    abbr: 'EN',
  },
};

@Injectable({ providedIn: 'root' })
export class I18NService implements AlainI18NService {
  // tslint:disable-next-line:variable-name
  private readonly _default: string = DEFAULT;
  private change$ = new BehaviorSubject<string | null>(null);

  // tslint:disable-next-line:variable-name
  private langs = Object.keys(LANGS).map(code => {
    const item = LANGS[code];
    return { code, text: item.text, abbr: item.abbr };
  });

  constructor(
    settingsService: SettingsService,
    private nzI18nService: NzI18nService,
    private delonLocaleService: DelonLocaleService,
    private translateService: TranslateService,
  ) {
    const defaultLang =
      settingsService.layout.lang || translateService.getBrowserLang();
    // `@ngx-translate/core` 预先知道支持哪些语言
    const langs: Array<string> = this.langs.map(item => item.code);
    translateService.addLangs(langs);

    this._default = langs.includes(defaultLang) ? defaultLang : langs[0];
    this.updateLangData(this._default);
  }

  private updateLangData(lang: string) {
    const langData = LANGS[lang];
    registerLocaleData(langData.ng);
    this.nzI18nService.setLocale(langData.zorro);
    // tslint:disable-next-line:no-any
    (window as any).__locale__ = langData.dateFns;
    this.delonLocaleService.setLocale(langData.delon);
  }

  get change(): Observable<string> {
    return this.change$
      .asObservable()
      .pipe(
        filter<string | null, string>(
          (w: string | null): w is string => w != null,
        ),
      );
  }

  public use(lang: string): void {
    lang = lang || this.translateService.getDefaultLang();
    if (this.currentLang === lang) {
      return;
    }
    this.updateLangData(lang);
    this.translateService.use(lang).subscribe(() => this.change$.next(lang));
  }

  /** 获取语言列表 */
  public getLangs() {
    return this.langs;
  }

  /** 翻译 */
  public fanyi(key: string, interpolateParams?: object) {
    return this.translateService.instant(key, interpolateParams);
  }

  /** 默认语言 */
  get defaultLang() {
    return this._default;
  }

  /** 当前语言 */
  get currentLang() {
    return (
      this.translateService.currentLang ||
      this.translateService.getDefaultLang() ||
      this._default
    );
  }
}
