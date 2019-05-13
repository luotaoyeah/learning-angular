import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { Doc04RoutingModule } from './doc-04-routing.module';
import { Doc0402Module } from './04-02-i18n/doc-04-02.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Doc04RoutingModule,
    Doc0402Module,
  ],
  exports: [Doc0402Module],
})
export class Doc04Module {}
