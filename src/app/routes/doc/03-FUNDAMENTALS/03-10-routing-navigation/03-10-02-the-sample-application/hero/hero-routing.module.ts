import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'superhero' },
  { path: ':id', redirectTo: 'superhero/:id' },
  {
    path: 'superhero',
    component: HeroListComponent,
    data: {
      animation: 'heroes',
    },
  },
  {
    path: 'superhero/:id',
    component: HeroDetailComponent,
    data: {
      animation: 'hero',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroRoutingModule {}
