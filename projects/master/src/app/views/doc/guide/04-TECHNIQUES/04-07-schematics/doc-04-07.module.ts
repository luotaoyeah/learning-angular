import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc0407RoutingModule } from '@app/views/doc/guide/04-TECHNIQUES/04-07-schematics/doc-04-07-routing.module';
import { Doc040703Component } from '@app/views/doc/guide/04-TECHNIQUES/04-07-schematics/04-07-03-schematics-for-libraries/doc-04-07-03.component';
import { Doc040701Component } from '@app/views/doc/guide/04-TECHNIQUES/04-07-schematics/04-07-01-schematics-overview/doc-04-07-01.component';
import { Doc040702Component } from '@app/views/doc/guide/04-TECHNIQUES/04-07-schematics/04-07-02-authoring-schematics/doc-04-07-02.component';
import { Doc04070302Component } from '@app/views/doc/guide/04-TECHNIQUES/04-07-schematics/04-07-03-schematics-for-libraries/04-07-03-02-providing-generation-support/doc-04-07-03-02.component';

@NgModule({
  declarations: [Doc040701Component, Doc040702Component, Doc04070302Component, Doc040703Component],
  imports: [Doc0407RoutingModule, SharedModule],
})
export class Doc0407Module {}
