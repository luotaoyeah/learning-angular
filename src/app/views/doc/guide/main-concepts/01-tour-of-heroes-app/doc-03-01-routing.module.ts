import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@app/views/doc/guide/main-concepts/01-tour-of-heroes-app/dashboard/dashboard.component';
import { HeroesComponent } from '@app/views/doc/guide/main-concepts/01-tour-of-heroes-app/heroes/heroes.component';
import { Doc0301Component } from '@app/views/doc/guide/main-concepts/01-tour-of-heroes-app/doc-03-01.component';
import { HeroDetailComponent } from '@app/views/doc/guide/main-concepts/01-tour-of-heroes-app/hero-detail/hero-detail.component';

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
