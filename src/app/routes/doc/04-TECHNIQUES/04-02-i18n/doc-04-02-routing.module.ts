import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc0402Component } from './doc-04-02.component';

const routes: Routes = [
  {
    path: '04/02',
    component: Doc0402Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0402RoutingModule {}
