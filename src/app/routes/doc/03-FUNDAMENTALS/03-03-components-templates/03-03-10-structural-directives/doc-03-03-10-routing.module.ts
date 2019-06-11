import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030310Component } from './doc-03-03-10.component';

const routes: Routes = [
  {
    path: '03/02/10',
    component: Doc030310Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc030310RoutingModule {}
