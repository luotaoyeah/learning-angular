import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc0304RoutingModule } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/doc-03-04-routing.module';
import { Doc030301Module } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-01-introduction/doc-03-03-01.module';
import { Doc030202Module } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-02-reactive-form/doc-03-02-02.module';
import { Doc030303Module } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-03-template-driven-form/doc-03-03-03.module';
import { Doc030304Module } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-04-form-validation/doc-03-03-04.module';
import { Doc030305Module } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-05-dynamic-forms/doc-03-03-05.module';

@NgModule({
  imports: [
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
