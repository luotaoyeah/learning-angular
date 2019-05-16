import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc08RoutingModule } from './doc-08-routing.module';
import { Doc0801Component } from './08-01-overview/doc-08-01.component';

@NgModule({
  declarations: [Doc0801Component],
  imports: [CommonModule, Doc08RoutingModule],
  exports: [],
})
export class Doc08Module {}
