import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { PanelModule } from 'primeng/panel';
import { Doc031002Component } from './doc-03-10-02.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { Doc031002RoutingModule } from './doc-03-10-02-routing.module';

@NgModule({
  declarations: [Doc031002Component, ComposeMessageComponent],
  imports: [SharedModule, Doc031002RoutingModule, ...[PanelModule]],
})
export class Doc031002Module {}
