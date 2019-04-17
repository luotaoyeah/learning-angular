import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0306RoutingModule } from './doc-03-06-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { Doc030601Component } from './03-06-01-ngmodules-introduction/doc-03-06-01.component';

@NgModule({
  declarations: [Doc030601Component],
  imports: [Doc0306RoutingModule, CommonModule, FormsModule, SharedModule],
  entryComponents: [],
})
export class Doc0306Module {}
