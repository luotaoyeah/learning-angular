import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0308RoutingModule } from './doc-03-08-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { Doc0308Component } from './doc-03-08.component';
import { Doc030801Component } from './03-08-01-getting-json-data/doc-03-08-01.component';
import { Doc030802Component } from './03-08-02-error-handling/doc-03-08-02.component';

@NgModule({
  declarations: [Doc0308Component, Doc030801Component, Doc030802Component],
  imports: [Doc0308RoutingModule, CommonModule, FormsModule, SharedModule],
})
export class Doc0308Module {}
