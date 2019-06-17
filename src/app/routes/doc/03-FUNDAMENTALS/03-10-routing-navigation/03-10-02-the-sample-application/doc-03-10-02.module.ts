import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc031002Component } from './doc-03-10-02.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { Doc031002RoutingModule } from './doc-03-10-02-routing.module';

@NgModule({
  declarations: [Doc031002Component, ComposeMessageComponent],
  imports: [SharedModule, Doc031002RoutingModule],
})
export class Doc031002Module {}
