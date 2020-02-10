import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_BOOTSTRAP_LISTENER, NgModule, Provider } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { AppEffects } from '@app/app.effects';
import { DefaultInterceptor } from '@app/core';
import { CoreModule } from '@app/core/core.module';
import { environment } from '@app/env/environment';
import { SharedModule } from '@app/shared';
import { Doc0306070102Service } from '@app/views/doc/guide/main-concepts/07-ngmodules/03-06-07-providers/03-06-07-01-providing-a-service/service/doc-03-06-07-01-02.service';
import { Doc03060802Service } from '@app/views/doc/guide/main-concepts/07-ngmodules/03-06-08-singleton-services/03-06-08-01-providing-a-singleton-service/service/doc-03-06-08-02.service';
import { Doc0306080201Module } from '@app/views/doc/guide/main-concepts/07-ngmodules/03-06-08-singleton-services/03-06-08-02-the-for-root-pattern/doc-03-06-08-02-01/doc-03-06-08-02-01.module';
import { Doc0306080201Service } from '@app/views/doc/guide/main-concepts/07-ngmodules/03-06-08-singleton-services/03-06-08-02-the-for-root-pattern/doc-03-06-08-02-01/service/doc-03-06-08-02-01.service';
import { Doc0306080301Module } from '@app/views/doc/guide/main-concepts/07-ngmodules/03-06-08-singleton-services/03-06-08-03-prevent-reimport-of-the-ngmodule/doc-03-06-08-03-01/doc-03-06-08-03-01.module';
import { Doc03061201Service } from '@app/views/doc/guide/main-concepts/07-ngmodules/03-06-12-ngmodule-faq/03-06-12-01/service/doc-03-06-12-01.service';
import { Doc030702010201Service } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-02-hierarchical-dependency-injection/03-07-02-01-where-to-configure-providers/03-07-02-01-02/service/doc-03-07-02-01-02-01.service';
import { Doc0307030603Service } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-03-di-providers/03-07-03-06-tree-shakable-providers/service/doc-03-07-03-06-03.service';
import { Doc03080502Interceptor } from '@app/views/doc/guide/main-concepts/09-httpclient/03-08-05-advanced-usage/03-08-05-02-debouncing-requests/service/doc-03-08-05-02.interceptor';
import { Doc0308050301Interceptor } from '@app/views/doc/guide/main-concepts/09-httpclient/03-08-05-advanced-usage/03-08-05-03-intercepting-requests-and-responses/service/doc-03-08-05-03-01.interceptor';
import { Doc0308050302Interceptor } from '@app/views/doc/guide/main-concepts/09-httpclient/03-08-05-advanced-usage/03-08-05-03-intercepting-requests-and-responses/service/doc-03-08-05-03-02.interceptor';
import { Doc0308050303Interceptor } from '@app/views/doc/guide/main-concepts/09-httpclient/03-08-05-advanced-usage/03-08-05-03-intercepting-requests-and-responses/service/doc-03-08-05-03-03.interceptor';
import { Doc0308050304Interceptor } from '@app/views/doc/guide/main-concepts/09-httpclient/03-08-05-advanced-usage/03-08-05-03-intercepting-requests-and-responses/service/doc-03-08-05-03-04.interceptor';
import { X01CustomRouterStateSerializer } from '@app/views/package/ngrx/router-store/02-configuration/service/x-01-custom-router-state-serializer';
import { MetaReducer02 } from '@app/views/package/ngrx/store/04-recipes/04-01-inject-reducers/store/reducers/04-01.reducer';
import { ViewsModule } from '@app/views/views.module';
import { EffectsModule } from '@ngrx/effects';
import { NavigationActionTiming, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule, USER_PROVIDED_META_REDUCERS } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './reducers';

/*
 * 因为 HttpClientModule 可能需要依赖 interceptors, 因此 interceptors 需要和 HttpClientModule 注册到同一个 injector 中,
 * 注册 interceptor 时使用的 injection-token 是 angular 内置的 HTTP_INTERCEPTORS, 并且使用 multi: true,
 * 多个 interceptors 的注册顺序, 决定了它们的执行顺序
 */
const INTERCEPTOR_PROVIDES: Array<Provider> = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: DefaultInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: Doc0308050301Interceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: Doc0308050302Interceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: Doc0308050303Interceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: Doc0308050304Interceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: Doc03080502Interceptor,
    multi: true,
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ViewsModule,
    Doc0306080201Module.forRoot(),
    Doc0306080301Module,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'ngrxRouter',
      navigationActionTiming: NavigationActionTiming.PostActivation,
      serializer: X01CustomRouterStateSerializer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 100,
      logOnly: environment.production,
    }),
  ],
  providers: [
    ...INTERCEPTOR_PROVIDES,
    /*
     * 显式地将某个 service 声明在 root NgModule 的 providers 中,
     * 等价于在该 service 的 @Injectable 中使用 providedIn: 'root'
     */
    Doc0306070102Service,
    Doc03060802Service,

    /*
     * NgModule A 在引入（import） NgModule B 的时候,
     * 会自动将 NgModule B 的 providers 中的数据添加到 NgModule A 的 providers 中去,
     * 并且是添加到 NgModule A 自己的 providers 的前面,
     * 也就是说, 如果 NgModule A 和 NgModule B 同时定义了同一个 provider,
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
    /*
     * 使用 USER_PROVIDED_META_REDUCERS 来注入 NGRX 的 meta-reducer
     */
    {
      provide: USER_PROVIDED_META_REDUCERS,
      useFactory: (metaReducer02: MetaReducer02) => {
        return [metaReducer02.createMetaReducer()];
      },
      deps: [MetaReducer02],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
