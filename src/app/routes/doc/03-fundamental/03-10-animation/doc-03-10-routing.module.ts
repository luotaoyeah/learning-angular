import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc031001Component } from './03-10-01-introduction/doc-03-10-01.component';
import { Doc031002Component } from './03-10-02-transition-and-triggers/doc-03-10-02.component';
import { Doc031003Component } from './03-10-03-complex-sequences/doc-03-10-03.component';
import { Doc031004Component } from './03-10-04-reusable-animations/doc-03-10-04.component';
import { Doc031005Component } from './03-10-05-route-transition-animations/doc-03-10-05.component';

const routes: Routes = [
  {
    path: '03/10/01',
    component: Doc031001Component,
  },
  {
    path: '03/10/02',
    component: Doc031002Component,
  },
  {
    path: '03/10/03',
    component: Doc031003Component,
  },
  {
    path: '03/10/04',
    component: Doc031004Component,
  },
  {
    path: '03/10/05',
    component: Doc031005Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0310RoutingModule {}
