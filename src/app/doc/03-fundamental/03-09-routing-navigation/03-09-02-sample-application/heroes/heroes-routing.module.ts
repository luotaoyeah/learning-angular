import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { Doc030902Component } from '../doc-03-09-02.component';

const routes: Routes = [
  {
    path: 'doc/fundamental/routing/sample-application',
    component: Doc030902Component,
    children: [
      { path: 'heroes', redirectTo: 'superheroes' },
      { path: 'heroes/:id', redirectTo: 'superheroes/:id' },
      {
        path: 'superheroes',
        component: HeroListComponent,
        data: {
          animation: 'heroes'
        }
      },
      {
        path: 'superheroes/:id',
        component: HeroDetailComponent,
        data: {
          animation: 'hero'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {}
