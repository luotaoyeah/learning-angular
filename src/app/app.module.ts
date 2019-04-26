import {
  APP_BOOTSTRAP_LISTENER,
  APP_INITIALIZER,
  LOCALE_ID,
  ModuleWithProviders,
  NgModule,
  Type,
} from '@angular/core';
// #region Http Interceptors
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// #region default language
// 参考：https://ng-alain.com/docs/i18n
import { default as ngLang } from '@angular/common/locales/en';
import { en_US as zorroLang, NZ_I18N } from 'ng-zorro-antd';
import {
  ALAIN_I18N_TOKEN,
  DELON_LOCALE,
  en_US as delonLang,
} from '@delon/theme';
// register angular
import { registerLocaleData } from '@angular/common';
// #endregion
// #region i18n services
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { I18NService } from '@core/i18n/i18n.service';
// #region JSON Schema form (using @delon/form)
import { JsonSchemaModule } from '@shared/json-schema/json-schema.module';
import { SimpleInterceptor } from '@delon/auth';
import { DefaultInterceptor } from '@core/net/default.interceptor';
// #region Startup Service
import { StartupService } from '@core/startup/startup.service';
import { DelonModule } from './delon.module';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';
import { LayoutModule } from './layout/layout.module';
import { Doc0306070102Service } from './routes/doc/03-fundamental/03-06-ngmodules/03-06-07-providers/03-06-07-01-providing-a-service/service/doc-03-06-07-01-02.service';
import { Doc03060802Service } from './routes/doc/03-fundamental/03-06-ngmodules/03-06-08-singleton-services/03-06-08-01-providing-a-singleton-service/service/doc-03-06-08-02.service';
import { Doc0306080201Module } from './routes/doc/03-fundamental/03-06-ngmodules/03-06-08-singleton-services/03-06-08-02-the-for-root-pattern/doc-03-06-08-02-01/doc-03-06-08-02-01.module';
import { Doc0306080201Service } from './routes/doc/03-fundamental/03-06-ngmodules/03-06-08-singleton-services/03-06-08-02-the-for-root-pattern/doc-03-06-08-02-01/service/doc-03-06-08-02-01.service';
import { Doc0306080301Module } from './routes/doc/03-fundamental/03-06-ngmodules/03-06-08-singleton-services/03-06-08-03-prevent-reimport-of-the-ngmodule/doc-03-06-08-03-01/doc-03-06-08-03-01.module';
import { Doc03061201Service } from './routes/doc/03-fundamental/03-06-ngmodules/03-06-12-ngmodule-faq/03-06-12-01/service/doc-03-06-12-01.service';
import { Doc030702010201Service } from './routes/doc/03-fundamental/03-07-dependency-injection/03-07-02-hierarchical-dependency-injection/03-07-02-01-where-to-configure-providers/03-07-02-01-02/service/doc-03-07-02-01-02-01.service';
import { PageNotFoundComponent } from './comn/page-not-found/page-not-found.component';
import { Doc0307030603Service } from './routes/doc/03-fundamental/03-07-dependency-injection/03-07-03-di-providers/03-07-03-06-tree-shakable-providers/service/doc-03-07-03-06-03.service';

const LANG = {
  abbr: 'en',
  ng: ngLang,
  zorro: zorroLang,
  delon: delonLang,
};

registerLocaleData(LANG.ng, LANG.abbr);
const LANG_PROVIDES = [
  { provide: LOCALE_ID, useValue: LANG.abbr },
  { provide: NZ_I18N, useValue: LANG.zorro },
  { provide: DELON_LOCALE, useValue: LANG.delon },
];

// 加载i18n语言文件
export function I18nHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `assets/tmp/i18n/`, '.json');
}

const I18NSERVICE_MODULES = [
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: I18nHttpLoaderFactory,
      deps: [HttpClient],
    },
  }),
];

const I18NSERVICE_PROVIDES = [
  { provide: ALAIN_I18N_TOKEN, useClass: I18NService, multi: false },
];
// #region

const FORM_MODULES = [JsonSchemaModule];
// #endregion

const INTERCEPTOR_PROVIDES = [
  { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
];
// #endregion

// #region global third module
const GLOBAL_THIRD_MODULES: Array<
  // tslint:disable-next-line:no-any
  Type<any> | ModuleWithProviders<{}> | any[]
> = [];

// #endregion

export function StartupServiceFactory(
  startupService: StartupService,
  // tslint:disable-next-line:no-any
): () => any {
  return () => startupService.load();
}

const APPINIT_PROVIDES = [
  StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true,
  },
];

// #endregion

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    DelonModule.forRoot(),
    CoreModule,
    SharedModule,
    LayoutModule,
    RoutesModule,
    Doc0306080201Module.forRoot(),
    Doc0306080301Module,
    ...I18NSERVICE_MODULES,
    ...FORM_MODULES,
    ...GLOBAL_THIRD_MODULES,
  ],
  providers: [
    ...LANG_PROVIDES,
    ...INTERCEPTOR_PROVIDES,
    ...I18NSERVICE_PROVIDES,
    ...APPINIT_PROVIDES,
    /*
     * 显示地将某个 service 声明在 root NgModule 的 providers 中，
     * 等价于在该 service 的 @Injectable 中使用 providedIn: 'root'
     */
    Doc0306070102Service,
    Doc03060802Service,

    /*
     * NgModule A 在引入（import） NgModule B 的时候，
     * 会自动将 NgModule B 的 providers 中的数据添加到 NgModule A 的 providers 中去，
     * 并且是添加到 NgModule A 自己的 providers 的前面，
     * 也就是说，如果 NgModule A 和 NgModule B 同时定义了同一个 provider，
     * 则 NgModule A 中的 provider 会覆盖 NgModule B 中的 provider
     */
    {
      provide: Doc0306080201Service,
      useValue: {
        doSomething() {
          console.log(`%c[${Doc0306080201Service.name}]`, 'color:green');
        },
      },
    },
    {
      provide: Doc03061201Service,
      useValue: {
        doSomething(): string {
          return 'ROOT';
        },
      },
    },
    {
      provide: Doc030702010201Service,
      useValue: {
        doSomething(): void {
          console.log(`%c[${Doc030702010201Service.name}]`, 'color:red');
        },
      },
    },
    {
      provide: APP_BOOTSTRAP_LISTENER,
      useFactory: () => {
        return () => {
          console.log('APP_BOOTSTRAP_LISTENER');
        };
      },
      multi: true,
    },
    {
      provide: Doc0307030603Service,
      useValue: {
        K: 'BAR',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
