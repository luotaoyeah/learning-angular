import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { Doc0301Component } from './doc-03-01.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: 'tutorial',
    component: Doc0301Component,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'heroes',
        component: HeroesComponent,
      },
      {
        path: 'heroes/:id',
        component: HeroDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0301RoutingModule {}
