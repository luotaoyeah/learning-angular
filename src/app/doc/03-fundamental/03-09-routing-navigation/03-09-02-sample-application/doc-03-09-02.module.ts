import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { Doc030902Component } from './doc-03-09-02.component';
import { HeroesModule } from './heroes/heroes.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Doc030902RoutingModule } from './doc-03-09-02-routing.module';

@NgModule({
  declarations: [Doc030902Component, ComposeMessageComponent],
  imports: [CommonModule, FormsModule, Doc030902RoutingModule, ...[PanelModule, ButtonModule], HeroesModule]
})
export class Doc030902Module {}
