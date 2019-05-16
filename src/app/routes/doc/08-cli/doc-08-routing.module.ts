import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc0801Component } from './08-01-overview/doc-08-01.component';

const routes: Routes = [
  {
    path: '08/01',
    component: Doc0801Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc08RoutingModule {}
