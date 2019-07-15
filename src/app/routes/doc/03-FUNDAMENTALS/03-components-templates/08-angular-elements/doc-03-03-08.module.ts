import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc030308RoutingModule } from './doc-03-03-08-routing.module';
import { Doc030308Component } from './doc-03-03-08.component';
import { Doc03030801Component } from './01-angular-elements-overview/doc-03-03-08-01.component';

@NgModule({
  declarations: [Doc030308Component, Doc03030801Component],
  imports: [SharedModule, Doc030308RoutingModule],
})
export class Doc030308Module {}
