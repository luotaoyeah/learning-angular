import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HeroListComponent,
    data: {
      animation: 'heroes',
      title: 'HEROES',
    },
  },
  {
    path: ':id',
    component: HeroDetailComponent,
    data: {
      animation: 'hero',
      title: 'HERO',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroRoutingModule {}
