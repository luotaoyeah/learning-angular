import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc08RoutingModule } from './doc-08-routing.module';
import { Doc0801Component } from './08-01-overview/doc-08-01.component';
import { Doc0802Component } from './08-02-add/doc-08-02.component';
import { SharedModule } from '@shared';
import { Doc0803Component } from './08-03-build/doc-08-03.component';

@NgModule({
  declarations: [Doc0801Component, Doc0802Component, Doc0803Component],
  imports: [CommonModule, Doc08RoutingModule, SharedModule],
  exports: [],
})
export class Doc08Module {}
