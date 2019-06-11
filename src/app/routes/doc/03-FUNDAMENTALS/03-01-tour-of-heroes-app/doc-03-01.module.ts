import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0301Component } from './doc-03-01.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { FormsModule } from '@angular/forms';
import { Doc0301RoutingModule } from './doc-03-01-routing.module';

@NgModule({
  declarations: [
    Doc0301Component,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  imports: [CommonModule, Doc0301RoutingModule, FormsModule],
})
export class Doc0301Module {}
