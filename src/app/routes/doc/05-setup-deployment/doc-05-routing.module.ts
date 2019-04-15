import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc05Component } from './doc-05.component';
import { Doc0507Component } from './05-07-testing/doc-05-07.component';

const routes: Routes = [
  {
    path: '05',
    component: Doc05Component,
    children: [{ path: '07', component: Doc0507Component }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc05RoutingModule {}
