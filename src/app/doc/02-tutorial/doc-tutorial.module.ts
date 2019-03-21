import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocTutorialComponent } from './doc-tutorial.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DocTutorialComponent, HeroesComponent, HeroDetailComponent, MessagesComponent, DashboardComponent, HeroSearchComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild([])],
  exports: [DocTutorialComponent]
})
export class DocTutorialModule {}
