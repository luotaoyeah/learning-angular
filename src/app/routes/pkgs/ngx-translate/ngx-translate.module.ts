import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTranslateRoutingModule } from './ngx-translate-routing.module';
import { NgxTranslateComponent } from './ngx-translate.component';
import { SharedModule } from '@shared';
import { NgxTranslate01Component } from './01-translate-module/ngx-translate-01.component';
import { NgxTranslate02Component } from './02-translate-pipe/ngx-translate-02.component';
import { NgxTranslate03Component } from './03-translate-directive/ngx-translate-03.component';

@NgModule({
  declarations: [
    NgxTranslateComponent,
    NgxTranslate01Component,
    NgxTranslate02Component,
    NgxTranslate03Component,
  ],
  imports: [CommonModule, NgxTranslateRoutingModule, SharedModule],
})
export class NgxTranslateModule {}
