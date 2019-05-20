import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc0801Component } from './08-01-overview/doc-08-01.component';
import { Doc0802Component } from './08-02-add/doc-08-02.component';
import { Doc0803Component } from './08-03-build/doc-08-03.component';
import { Doc0804Component } from './08-04-config/doc-08-04.component';
import { Doc0805Component } from './08-05-doc/doc-08-05.component';

const routes: Routes = [
  {
    path: '08/01',
    component: Doc0801Component,
  },
  {
    path: '08/02',
    component: Doc0802Component,
  },
  {
    path: '08/03',
    component: Doc0803Component,
  },
  {
    path: '08/04',
    component: Doc0804Component,
  },
  {
    path: '08/05',
    component: Doc0805Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc08RoutingModule {}
