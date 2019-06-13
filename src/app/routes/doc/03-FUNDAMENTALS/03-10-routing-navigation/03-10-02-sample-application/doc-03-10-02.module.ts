import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { Doc031002Component } from './doc-03-10-02.component';
import { HeroesModule } from './heroes/heroes.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Doc031002RoutingModule } from './doc-03-10-02-routing.module';

@NgModule({
  declarations: [Doc031002Component, ComposeMessageComponent],
  imports: [
    CommonModule,
    FormsModule,
    Doc031002RoutingModule,
    ...[PanelModule, ButtonModule],
    HeroesModule,
  ],
})
export class Doc031002Module {}
