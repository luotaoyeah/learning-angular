import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc0305Component } from './doc-03-05.component';

const routes: Routes = [
  {
    path: '03/05',
    component: Doc0305Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0305RoutingModule {}
