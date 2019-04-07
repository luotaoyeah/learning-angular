import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030301Component } from './03-03-01-introduction/doc-03-03-01.component';

const routes: Routes = [
  {
    path: '03/03/introduction',
    component: Doc030301Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0303RoutingModule {}
