import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from '@app/views/doc/guide/main-concepts/10-routing-navigation/02-the-sample-application/hero/hero-list/hero-list.component';
import { HeroDetailComponent } from '@app/views/doc/guide/main-concepts/10-routing-navigation/02-the-sample-application/hero/hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HeroListComponent,
    data: {
      title: 'HEROES',
    },
  },
  {
    path: ':id',
    component: HeroDetailComponent,
    data: {
      title: 'HERO',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroRoutingModule {}
