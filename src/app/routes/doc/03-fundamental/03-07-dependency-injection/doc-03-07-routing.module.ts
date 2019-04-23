import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030701Component } from './03-07-01-angular-dependency-injection/doc-03-07-01.component';
import { Doc030702Component } from './03-07-02-hierarchical-dependency-injection/doc-03-07-02.component';
import { Doc030703Component } from './03-07-03-di-providers/doc-03-07-03.component';
import { Doc030704Component } from './03-07-04-di-in-action/doc-03-07-04.component';
import { Doc030705Component } from './03-07-05-navigate-the-component-tree/doc-03-07-05.component';

const routes: Routes = [
  {
    path: '03/07/01',
    component: Doc030701Component,
  },
  {
    path: '03/07/02',
    component: Doc030702Component,
  },
  {
    path: '03/07/03',
    component: Doc030703Component,
  },
  {
    path: '03/07/04',
    component: Doc030704Component,
  },
  {
    path: '03/07/05',
    component: Doc030705Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0307RoutingModule {}
