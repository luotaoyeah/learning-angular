import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030301Component } from './03-03-01-introduction/doc-03-03-01.component';
import { Doc030302Component } from './03-03-02-reactive-form/doc-03-03-02.component';
import { Doc030303Component } from './03-03-03-template-driven-form/doc-03-03-03.component';
import { Doc030304Component } from './03-03-04-form-validation/doc-03-03-04.component';
import { Doc030305Component } from './03-03-05-dynamic-forms/doc-03-03-05.component';

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
  {
    path: '03/03/form-validation',
    component: Doc030304Component,
  },
  {
    path: '03/03/05',
    component: Doc030305Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0303RoutingModule {}
