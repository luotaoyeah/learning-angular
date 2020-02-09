import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0301Component } from '@app/views/doc/guide/03-FUNDAMENTALS/01-tour-of-heroes-app/doc-03-01.component';
import { HeroesComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/01-tour-of-heroes-app/heroes/heroes.component';
import { HeroDetailComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/01-tour-of-heroes-app/hero-detail/hero-detail.component';
import { MessagesComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/01-tour-of-heroes-app/messages/messages.component';
import { DashboardComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/01-tour-of-heroes-app/dashboard/dashboard.component';
import { HeroSearchComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/01-tour-of-heroes-app/hero-search/hero-search.component';
import { FormsModule } from '@angular/forms';
import { Doc0301RoutingModule } from '@app/views/doc/guide/03-FUNDAMENTALS/01-tour-of-heroes-app/doc-03-01-routing.module';

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
