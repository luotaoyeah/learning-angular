import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc0308Component } from './doc-03-08.component';

const routes: Routes = [
  {
    path: '03/08',
    component: Doc0308Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0308RoutingModule {}
