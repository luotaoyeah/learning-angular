import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { Doc0402RoutingModule } from './doc-04-02-routing.module';
import { Doc0402Component } from './doc-04-02.component';
import { Doc040201Component } from './04-02-01-angular-and-i18n/doc-04-02-01.component';

@NgModule({
  declarations: [Doc0402Component, Doc040201Component],
  imports: [Doc0402RoutingModule, SharedModule],
})
export class Doc0402Module {}
