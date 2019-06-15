import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { Doc031002Component } from '../doc-03-10-02.component';

const routes: Routes = [
  {
    path: '03/10/02',
    component: Doc031002Component,
    children: [
      { path: 'heroes', redirectTo: 'superheroes' },
      { path: 'heroes/:id', redirectTo: 'superheroes/:id' },
      {
        path: 'superheroes',
        component: HeroListComponent,
        data: {
          animation: 'heroes',
        },
      },
      {
        path: 'superheroes/:id',
        component: HeroDetailComponent,
        data: {
          animation: 'hero',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
