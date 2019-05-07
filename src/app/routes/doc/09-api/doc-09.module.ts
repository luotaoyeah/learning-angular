import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { Doc09RoutingModule } from './doc-09-routing.module';
import { Doc0901Module } from './09-01-core/doc-09-01.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Doc09RoutingModule,
    Doc0901Module,
  ],
  exports: [Doc0901Module],
})
export class Doc09Module {}
