import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030609Component } from './doc-03-06-09.component';

const routes: Routes = [
  {
    path: '03/07/09',
    component: Doc030609Component,
    children: [
      {
        path: '01',
        loadChildren: () => import('./03-06-09-01/doc-03-06-09-01.module').then((m) => m.Doc03060901Module),
      },
      {
        path: '02',
        loadChildren: () => import('./03-06-09-02/doc-03-06-09-02.module').then((m) => m.Doc03060902Module),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc030609RoutingModule {}
