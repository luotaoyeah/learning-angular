import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { Doc02Component } from './doc-02.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: 'doc/tutorial',
    component: Doc02Component,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'heroes/:id',
        component: HeroDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Doc02RoutingModule {}
