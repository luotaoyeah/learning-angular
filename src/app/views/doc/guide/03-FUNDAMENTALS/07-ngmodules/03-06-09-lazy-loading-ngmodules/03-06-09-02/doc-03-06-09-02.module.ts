import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Doc03060902RoutingModule } from './doc-03-06-09-02-routing.module';
import { Doc03060902Component } from './doc-03-06-09-02.component';

@NgModule({
  declarations: [Doc03060902Component],
  imports: [CommonModule, Doc03060902RoutingModule],
})
export class Doc03060902Module {}
