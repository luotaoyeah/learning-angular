import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030301Component } from './03-03-01-introduction/doc-03-03-01.component';
import { Doc030302Component } from './03-03-02-reactive-form/doc-03-03-02.component';
import { Doc030303Component } from './03-03-03-template-driven-form/doc-03-03-03.component';

const routes: Routes = [
  {
    path: '03/03/introduction',
    component: Doc030301Component,
  },
  {
    path: '03/03/reactive-form',
    component: Doc030302Component,
  },
  {
    path: '03/03/template-driven-form',
    component: Doc030303Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0303RoutingModule {}
