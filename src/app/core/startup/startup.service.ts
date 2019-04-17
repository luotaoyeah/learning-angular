import { Inject, Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  ALAIN_I18N_TOKEN,
  MenuService,
  SettingsService,
  TitleService,
} from '@delon/theme';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { ACLService } from '@delon/acl';
import { TranslateService } from '@ngx-translate/core';
import { NzIconService } from 'ng-zorro-antd';
import { ICONS_AUTO } from '../../../style-icons-auto';
import { ICONS } from '../../../style-icons';
import { I18NService } from '@core/i18n/i18n.service';

/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {
  constructor(
    iconService: NzIconService,
    private menuService: MenuService,
    private translateService: TranslateService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private settingsService: SettingsService,
    private aclService: ACLService,
    private titleService: TitleService,
    // @ts-ignore: TS6138
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private httpClient: HttpClient,
    // @ts-ignore: TS6138
    private injector: Injector,
  ) {
    iconService.addIcon(...ICONS_AUTO, ...ICONS);
  }

  // @ts-ignore: TS6133
  // tslint:disable-next-line:no-any
  private viaHttp(resolve: any, reject: any) {
    zip(
      this.httpClient.get(`assets/tmp/i18n/${this.i18n.defaultLang}.json`),
      this.httpClient.get('assets/tmp/app-data.json'),
    )
      .pipe(
        // 接收其他拦截器后产生的异常消息
        catchError(([langData, appData]) => {
          resolve(null);
          return [langData, appData];
        }),
      )
      .subscribe(
        ([langData, appData]) => {
          // setting language data
          this.translateService.setTranslation(this.i18n.defaultLang, langData);
          this.translateService.setDefaultLang(this.i18n.defaultLang);

          // tslint:disable-next-line:no-any
          const res: any = appData;
          // 应用信息：包括站点名、描述、年份
          this.settingsService.setApp(res.app);
          // 用户信息：包括姓名、头像、邮箱地址
          this.settingsService.setUser(res.user);
          // ACL：设置权限为全量
          this.aclService.setFull(true);
          // 初始化菜单
          this.menuService.add(res.menu);
          // 设置页面标题的后缀
          this.titleService.suffix = '';
        },
        () => {},
        () => {
          resolve(null);
        },
      );
  }

  // tslint:disable-next-line:no-any
  private viaMockI18n(resolve: any, reject: any) {
    this.httpClient
      .get(`assets/tmp/i18n/${this.i18n.defaultLang}.json`)
      .subscribe(langData => {
        this.translateService.setTranslation(this.i18n.defaultLang, langData);
        this.translateService.setDefaultLang(this.i18n.defaultLang);

        this.viaHttp(resolve, reject);
      });
  }

  // tslint:disable-next-line:no-any
  load(): Promise<any> {
    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise((resolve, reject) => {
      // http
      // this.viaHttp(resolve, reject);
      // mock：请勿在生产环境中这么使用，viaMock 单纯只是为了模拟一些数据使脚手架一开始能正常运行
      this.viaMockI18n(resolve, reject);
    });
  }
}
