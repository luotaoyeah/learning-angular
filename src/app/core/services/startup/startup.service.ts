import { Inject, Injectable } from '@angular/core';
import { _HttpClient, ALAIN_I18N_TOKEN, MenuService, SettingsService, TitleService } from '@delon/theme';
import { TranslateService } from '@ngx-translate/core';
import { NzIconService } from 'ng-zorro-antd';
import { ICONS_AUTO } from '../../../../style-icons-auto';
import { ICONS } from '../../../../style-icons';
import { I18NService } from '@app/core/services/i18n/i18n.service';
import { ReuseTabMatchMode, ReuseTabService } from '@delon/abc';

/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {
  constructor(
    nzIconService: NzIconService,
    private menuService: MenuService,
    private translateService: TranslateService,
    @Inject(ALAIN_I18N_TOKEN)
    private i18NService: I18NService,
    private settingsService: SettingsService,
    private titleService: TitleService,
    @Inject(ReuseTabService)
    private reuseTabService: ReuseTabService,
    private httpClient: _HttpClient,
  ) {
    nzIconService.addIcon(...ICONS_AUTO, ...ICONS);
  }

  // @ts-ignore: TS6133
  // tslint:disable-next-line:no-any
  private viaHttp(resolve: any, reject: any) {
    import(`../../consts/i18n/${this.i18NService.defaultLang}`).then(({ I18N }) => {
      this.settingsService.setLayout('lang', this.i18NService.defaultLang);
      this.translateService.setTranslation(this.i18NService.defaultLang, I18N);
      this.translateService.setDefaultLang(this.i18NService.defaultLang);

      this.httpClient.get('assets/tmp/app-data.json').subscribe(
        appData => {
          this.reuseTabService.keepingScroll = true;
          this.reuseTabService.mode = ReuseTabMatchMode.Menu;

          // tslint:disable-next-line:no-any
          const res: any = appData;
          this.settingsService.setApp(res.app);
          this.settingsService.setUser(res.user);
          this.menuService.add(res.menu);
          this.titleService.suffix = '';
        },
        () => {
          resolve(null);
        },
        () => {
          resolve(null);
        },
      );
    });
  }

  // tslint:disable-next-line:no-any
  public load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.viaHttp(resolve, reject);
    });
  }
}
