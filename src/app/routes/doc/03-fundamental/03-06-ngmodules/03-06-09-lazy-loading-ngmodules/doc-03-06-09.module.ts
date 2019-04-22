import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc030609RoutingModule } from './doc-03-06-09-routing.module';
import { Doc030609Component } from './doc-03-06-09.component';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [Doc030609Component],
  imports: [CommonModule, SharedModule, Doc030609RoutingModule],
})
export class Doc030609Module {}
