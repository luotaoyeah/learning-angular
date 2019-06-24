import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030202Component } from './doc-03-02-02.component';

const routes: Routes = [
  {
    path: '03/03/02',
    component: Doc030202Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc030302RoutingModule {}
