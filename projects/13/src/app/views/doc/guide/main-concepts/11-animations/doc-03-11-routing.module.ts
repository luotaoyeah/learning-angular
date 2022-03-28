import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc031101Component } from '@app/views/doc/guide/main-concepts/11-animations/03-11-01-introduction/doc-03-11-01.component';
import { Doc031102Component } from '@app/views/doc/guide/main-concepts/11-animations/03-11-02-transition-and-triggers/doc-03-11-02.component';
import { Doc031103Component } from '@app/views/doc/guide/main-concepts/11-animations/03-11-03-complex-sequences/doc-03-11-03.component';
import { Doc031104Component } from '@app/views/doc/guide/main-concepts/11-animations/03-11-04-reusable-animations/doc-03-11-04.component';
import { Doc031105Component } from '@app/views/doc/guide/main-concepts/11-animations/03-11-05-route-transition-animations/doc-03-11-05.component';

const routes: Routes = [
  {
    path: '03/11/01',
    component: Doc031101Component,
  },
  {
    path: '03/11/02',
    component: Doc031102Component,
  },
  {
    path: '03/11/03',
    component: Doc031103Component,
  },
  {
    path: '03/11/04',
    component: Doc031104Component,
  },
  {
    path: '03/11/05',
    component: Doc031105Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0311RoutingModule {}
