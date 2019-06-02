import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0303RoutingModule } from './doc-03-03-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared';
import { Doc030305Component } from './03-03-05-dynamic-forms/doc-03-03-05.component';
import { Doc030301Module } from './03-03-01-introduction/doc-03-03-01.module';
import { Doc030202Module } from './03-03-02-reactive-form/doc-03-02-02.module';
import { Doc030303Module } from './03-03-03-template-driven-form/doc-03-03-03.module';
import { Doc030304Module } from './03-03-04-form-validation/doc-03-03-04.module';

@NgModule({
  declarations: [Doc030305Component],
  imports: [
    CommonModule,
    Doc0303RoutingModule,
    FormsModule,
    SharedModule,
    Doc030301Module,
    Doc030202Module,
    Doc030303Module,
    Doc030304Module,
  ],
})
export class Doc0303Module {}
