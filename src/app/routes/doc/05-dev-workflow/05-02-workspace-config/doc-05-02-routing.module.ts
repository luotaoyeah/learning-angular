import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc0502Component } from './doc-05-02.component';

const routes: Routes = [
  {
    path: '05/02',
    component: Doc0502Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0502RoutingModule {}
