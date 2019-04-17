import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030601Component } from './03-06-01-ngmodules-introduction/doc-03-06-01.component';

const routes: Routes = [
  {
    path: '03/06/01',
    component: Doc030601Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0306RoutingModule {}
