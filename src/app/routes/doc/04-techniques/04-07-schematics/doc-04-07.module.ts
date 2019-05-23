import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { Doc0407RoutingModule } from './doc-04-07-routing.module';
import { Doc040703Component } from './04-07-03-schematics-for-libraries/doc-04-07-03.component';
import { Doc040701Component } from './04-07-01-schematics-overview/doc-04-07-01.component';
import { Doc040702Component } from './04-07-02-authoring-schematics/doc-04-07-02.component';

@NgModule({
  declarations: [Doc040701Component, Doc040702Component, Doc040703Component],
  imports: [Doc0407RoutingModule, SharedModule],
})
export class Doc0407Module {}
