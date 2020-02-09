import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Doc03060902RoutingModule } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-09-lazy-loading-ngmodules/03-06-09-02/doc-03-06-09-02-routing.module';
import { Doc03060902Component } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-09-lazy-loading-ngmodules/03-06-09-02/doc-03-06-09-02.component';

@NgModule({
  declarations: [Doc03060902Component],
  imports: [CommonModule, Doc03060902RoutingModule],
})
export class Doc03060902Module {}
