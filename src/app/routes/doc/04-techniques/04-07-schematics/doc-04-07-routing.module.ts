import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc040703Component } from './04-07-03-schematics-for-libraries/doc-04-07-03.component';
import { Doc040701Component } from './04-07-01-schematics-overview/doc-04-07-01.component';

const routes: Routes = [
  {
    path: '04/07/01',
    component: Doc040701Component,
  },
  {
    path: '04/07/03',
    component: Doc040703Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0407RoutingModule {}
