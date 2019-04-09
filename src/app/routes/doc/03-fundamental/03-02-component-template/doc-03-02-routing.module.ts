import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030201Component } from './03-02-01-displaying-data/doc-03-02-01.component';
import { Doc030202Component } from './03-02-02-template-syntax/doc-03-02-02.component';
import { Doc030203Component } from './03-02-03-user-input/doc-03-02-03.component';
import { Doc030204Component } from './03-02-04-lifecycle-hooks/doc-03-02-04.component';
import { Doc030205Component } from './03-02-05-component-interaction/doc-03-02-05.component';
import { Doc030206Component } from './03-02-06-component-style/doc-03-02-06.component';
import { Doc030207Component } from './03-02-07-angular-elements/doc-03-02-07.component';
import { Doc030208Component } from './03-02-08-dynamic-components/doc-03-02-08.component';
import { Doc030209Component } from './03-02-09-attribute-directives/doc-03-02-09.component';
import { Doc030210Component } from './03-02-10-structural-directives/doc-03-02-10.component';
import { Doc030211Component } from './03-02-11-pipe/doc-03-02-11.component';

const routes: Routes = [
  {
    path: '03/02/displaying-data',
    component: Doc030201Component,
  },
  {
    path: '03/02/template-syntax',
    component: Doc030202Component,
  },
  {
    path: '03/02/user-input',
    component: Doc030203Component,
  },
  {
    path: '03/02/lifecycle-hooks',
    component: Doc030204Component,
  },
  {
    path: '03/02/component-interaction',
    component: Doc030205Component,
  },
  {
    path: '03/02/component-style',
    component: Doc030206Component,
  },
  {
    path: '03/02/angular-elements',
    component: Doc030207Component,
  },
  {
    path: '03/02/dynamic-components',
    component: Doc030208Component,
  },
  {
    path: '03/02/attribute-directive',
    component: Doc030209Component,
  },
  {
    path: '03/02/structural-directive',
    component: Doc030210Component,
  },
  {
    path: '03/02/pipes',
    component: Doc030211Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0302RoutingModule {}