import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030201Component } from './03-02-01-displaying-data/doc-03-02-01.component';
import { Doc030202Component } from './03-02-02-template-syntax/doc-03-02-02.component';
import { Doc030203Component } from './03-02-03-user-input/doc-03-02-03.component';
import { Doc030204Component } from './03-02-04-lifecycle-hooks/doc-03-02-04.component';
import { Doc030205Component } from './03-02-05-component-interaction/doc-03-02-05.component';
import { Doc030206Component } from './03-02-06-component-style/doc-03-02-06.component';
import { Doc030207Component } from './03-02-07-angular-elements/doc-03-02-07.component';

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
  },
  {
    path: 'doc/fundamental/component-template/lifecycle-hooks',
    component: Doc030204Component
  },
  {
    path: 'doc/fundamental/component-template/component-interaction',
    component: Doc030205Component
  },
  {
    path: 'doc/fundamental/component-template/component-style',
    component: Doc030206Component
  },
  {
    path: 'doc/fundamental/component-template/angular-elements',
    component: Doc030207Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Doc0302RoutingModule {}
