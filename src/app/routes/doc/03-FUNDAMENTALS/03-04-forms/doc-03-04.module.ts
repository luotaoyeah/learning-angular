import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared';
import { Doc0304RoutingModule } from './doc-03-04-routing.module';
import { Doc030301Module } from './03-03-01-introduction/doc-03-03-01.module';
import { Doc030202Module } from './03-03-02-reactive-form/doc-03-02-02.module';
import { Doc030303Module } from './03-03-03-template-driven-form/doc-03-03-03.module';
import { Doc030304Module } from './03-03-04-form-validation/doc-03-03-04.module';
import { Doc030305Module } from './03-03-05-dynamic-forms/doc-03-03-05.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Doc0304RoutingModule,
    Doc030301Module,
    Doc030202Module,
    Doc030303Module,
    Doc030304Module,
    Doc030305Module,
  ],
})
export class Doc0304Module {}
