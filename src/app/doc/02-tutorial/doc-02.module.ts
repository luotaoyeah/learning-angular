import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc02Component } from './doc-02.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { FormsModule } from '@angular/forms';
import { Doc02RoutingModule } from './doc-02-routing.module';

@NgModule({
  declarations: [Doc02Component, HeroesComponent, HeroDetailComponent, MessagesComponent, DashboardComponent, HeroSearchComponent],
  imports: [CommonModule, Doc02RoutingModule, FormsModule]
})
export class Doc02Module {}
