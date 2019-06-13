import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030308Component } from './doc-03-03-08.component';

const routes: Routes = [
  {
    path: '03/03/08',
    component: Doc030308Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc030308RoutingModule {}
