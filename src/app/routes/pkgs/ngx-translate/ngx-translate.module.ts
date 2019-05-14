import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTranslateRoutingModule } from './ngx-translate-routing.module';
import { NgxTranslateComponent } from './ngx-translate.component';
import { SharedModule } from '@shared';
import { NgxTranslate01TranslateModuleComponent } from './01-translate-module/ngx-translate-01-translate-module.component';

@NgModule({
  declarations: [NgxTranslateComponent, NgxTranslate01TranslateModuleComponent],
  imports: [CommonModule, NgxTranslateRoutingModule, SharedModule],
})
export class NgxTranslateModule {}
