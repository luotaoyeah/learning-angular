import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc0902RoutingModule } from './doc-09-02-routing.module';
import { Doc090202Component } from './09-02-02-primary-entry-point-exports/doc-09-02-02.component';
import { Doc09020205Module } from './09-02-02-primary-entry-point-exports/09-02-02-05-directives/doc-09-02-02-05.module';
import { Doc09020206Module } from './09-02-02-primary-entry-point-exports/09-02-02-06-pipes/doc-09-02-02-06.module';

@NgModule({
  declarations: [Doc090202Component],
  imports: [
    SharedModule,
    Doc0902RoutingModule,
    Doc09020205Module,
    Doc09020206Module,
  ],
})
export class Doc0902Module {}
