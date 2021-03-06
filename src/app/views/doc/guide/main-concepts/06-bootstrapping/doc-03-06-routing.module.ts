import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc0306Component } from '@app/views/doc/guide/main-concepts/06-bootstrapping/doc-03-06.component';

const routes: Routes = [
  {
    path: '03/06',
    component: Doc0306Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0306RoutingModule {}
