/**
 * 进一步对基础模块的导入提炼
 * 有关模块注册指导原则请参考：https://github.com/ng-alain/ng-alain/issues/180
 */
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { throwIfAlreadyLoaded } from '@app/core';

import { AlainThemeModule } from '@delon/theme';
import {
  PageHeaderConfig,
  ReuseTabService,
  ReuseTabStrategy,
  STConfig,
} from '@delon/abc';
import { DelonAuthConfig } from '@delon/auth';
import { RouteReuseStrategy } from '@angular/router';

// tslint:disable-next-line:no-any
const REUSETAB_PROVIDES: Array<any> = [
  {
    provide: RouteReuseStrategy,
    useClass: ReuseTabStrategy,
    deps: [ReuseTabService],
  },
];

// region global config functions
export function fnPageHeaderConfig(): PageHeaderConfig {
  return {
    ...new PageHeaderConfig(),
    homeI18n: 'home',
  };
}

export function fnDelonAuthConfig(): DelonAuthConfig {
  return {
    ...new DelonAuthConfig(),
    login_url: '/passport/login',
  };
}

export function fnSTConfig(): STConfig {
  return {
    ...new STConfig(),
    modal: { size: 'lg' },
  };
}

const GLOBAL_CONFIG_PROVIDES = [
  { provide: STConfig, useFactory: fnSTConfig },
  { provide: PageHeaderConfig, useFactory: fnPageHeaderConfig },
  { provide: DelonAuthConfig, useFactory: fnDelonAuthConfig },
];

// endregion

@NgModule({
  imports: [AlainThemeModule.forRoot()],
})
export class DelonModule {
  constructor(@Optional() @SkipSelf() parentModule: DelonModule) {
    throwIfAlreadyLoaded(parentModule, 'DelonModule');
  }

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [...REUSETAB_PROVIDES, ...GLOBAL_CONFIG_PROVIDES],
    };
  }
}
