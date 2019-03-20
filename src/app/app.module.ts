import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './doc/02-tutorial/heroes/heroes.component';
import { HeroDetailComponent } from './doc/02-tutorial/hero-detail/hero-detail.component';
import { MessagesComponent } from './doc/02-tutorial/messages/messages.component';
import { DashboardComponent } from './doc/02-tutorial/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './doc/02-tutorial/in-memory-data.service';
import { HeroSearchComponent } from './doc/02-tutorial/hero-search/hero-search.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, MessagesComponent, DashboardComponent, HeroSearchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
