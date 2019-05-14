import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTranslateRoutingModule } from './ngx-translate-routing.module';
import { NgxTranslateComponent } from './ngx-translate.component';
import { SharedModule } from '@shared';
import { NgxTranslate01Component } from './01-translate-module/ngx-translate-01.component';
import { NgxTranslate02Component } from './02-translate-pipe/ngx-translate-02.component';
import { NgxTranslate03Component } from './03-translate-directive/ngx-translate-03.component';
import { NgxTranslate04Component } from './04-translate-service/ngx-translate-04.component';
import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
  TranslateModule,
} from '@ngx-translate/core';
import { NgxTranslate05Component } from './05-missing-translation-handler/ngx-translate-05.component';

/*
 * 根据某个 key 找不到对应的 i18n 文本时的处理逻辑, 我们可以进行自定义,
 * 实现 MissingTranslationHandler 接口的 handle() 方法
 */
class NtMissingTranstionHandler implements MissingTranslationHandler {
  public handle(params: MissingTranslationHandlerParams): void {
    console.log('[NtMissingTranstionHandler]\n', params.key);
  }
}

@NgModule({
  declarations: [
    NgxTranslateComponent,
    NgxTranslate01Component,
    NgxTranslate02Component,
    NgxTranslate03Component,
    NgxTranslate04Component,
    NgxTranslate05Component,
  ],
  imports: [
    CommonModule,
    NgxTranslateRoutingModule,
    SharedModule,
    TranslateModule.forChild({
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: NtMissingTranstionHandler,
      },
    }),
  ],
})
export class NgxTranslateModule {}
