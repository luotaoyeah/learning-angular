import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030201Component } from './03-02-01-displaying-data/doc-03-02-01.component';
import { Doc030202Component } from './03-02-02-template-syntax/doc-03-02-02.component';
import { Doc030203Component } from './03-02-03-user-input/doc-03-02-03.component';

const routes: Routes = [
  {
    path: 'doc/fundamental/component-template/displaying-data',
    component: Doc030201Component
  },
  {
    path: 'doc/fundamental/component-template/template-syntax',
    component: Doc030202Component
  },
  {
    path: 'doc/fundamental/component-template/user-input',
    component: Doc030203Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Doc0302RoutingModule {}
