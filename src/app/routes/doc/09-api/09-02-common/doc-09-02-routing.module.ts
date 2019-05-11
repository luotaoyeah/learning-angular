import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc090202Component } from './09-02-02-primary-entry-point-exports/doc-09-02-02.component';

const routes: Routes = [
  {
    path: '09/02/02',
    component: Doc090202Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0902RoutingModule {}
