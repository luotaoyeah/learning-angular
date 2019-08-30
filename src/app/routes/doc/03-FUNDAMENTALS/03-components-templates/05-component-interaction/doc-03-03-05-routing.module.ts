import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030305Component } from './doc-03-03-05.component';

const routes: Routes = [
  {
    path: '03/03/05',
    component: Doc030305Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc030305RoutingModule {}
