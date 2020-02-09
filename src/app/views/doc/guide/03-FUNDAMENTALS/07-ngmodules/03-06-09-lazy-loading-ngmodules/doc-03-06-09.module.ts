import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc030609RoutingModule } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-09-lazy-loading-ngmodules/doc-03-06-09-routing.module';
import { Doc030609Component } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-09-lazy-loading-ngmodules/doc-03-06-09.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [Doc030609Component],
  imports: [CommonModule, SharedModule, Doc030609RoutingModule],
})
export class Doc030609Module {}
