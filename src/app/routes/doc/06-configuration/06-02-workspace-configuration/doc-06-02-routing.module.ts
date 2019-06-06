import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc0602Component } from './doc-06-02.component';

const routes: Routes = [
  {
    path: '06/02',
    component: Doc0602Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0602RoutingModule {}
