import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030401Component } from './03-04-01-observables/doc-03-04-01.component';

const routes: Routes = [
  {
    path: '03/04/01',
    component: Doc030401Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0304RoutingModule {}
