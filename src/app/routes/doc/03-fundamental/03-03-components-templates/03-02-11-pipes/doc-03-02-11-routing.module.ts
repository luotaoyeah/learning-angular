import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030211Component } from './doc-03-02-11.component';

const routes: Routes = [
  {
    path: '03/02/11',
    component: Doc030211Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc030211RoutingModule {}