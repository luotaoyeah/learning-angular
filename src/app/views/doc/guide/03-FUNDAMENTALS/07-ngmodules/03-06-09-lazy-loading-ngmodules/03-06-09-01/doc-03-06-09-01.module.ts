import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Doc03060901RoutingModule } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-09-lazy-loading-ngmodules/03-06-09-01/doc-03-06-09-01-routing.module';
import { Doc03060901Component } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-09-lazy-loading-ngmodules/03-06-09-01/doc-03-06-09-01.component';

@NgModule({
  declarations: [Doc03060901Component],
  imports: [CommonModule, Doc03060901RoutingModule],
})
export class Doc03060901Module {}
