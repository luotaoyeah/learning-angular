import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc0309Component } from './doc-03-09.component';

const routes: Routes = [
  {
    path: '03/09',
    component: Doc0309Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0309RoutingModule {}
