import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { Doc04RoutingModule } from './doc-04-routing.module';
import { Doc0402Module } from './04-02-i18n/doc-04-02.module';
import { Doc0406Module } from './04-06-angular-libraries/doc-04-06.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Doc04RoutingModule,
    Doc0402Module,
    Doc0406Module,
  ],
  exports: [Doc0402Module, Doc0406Module],
})
export class Doc04Module {}
