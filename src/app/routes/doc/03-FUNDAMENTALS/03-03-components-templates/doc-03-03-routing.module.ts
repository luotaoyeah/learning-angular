import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030201Component } from './03-02-01-displaying-data/doc-03-02-01.component';
import { Doc030203Component } from './03-02-03-user-input/doc-03-02-03.component';
import { Doc030204Component } from './03-02-04-lifecycle-hooks/doc-03-02-04.component';
import { Doc030205Component } from './03-02-05-component-interaction/doc-03-02-05.component';
import { Doc030207Component } from './03-02-07-angular-elements/doc-03-02-07.component';
import { Doc030209Component } from './03-02-09-attribute-directives/doc-03-02-09.component';

const routes: Routes = [
  {
    path: '03/03/01',
    component: Doc030201Component,
  },
  {
    path: '03/03/03',
    component: Doc030203Component,
  },
  {
    path: '03/03/04',
    component: Doc030204Component,
  },
  {
    path: '03/03/05',
    component: Doc030205Component,
  },
  {
    path: '03/03/07',
    component: Doc030207Component,
  },
  {
    path: '03/03/09',
    component: Doc030209Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0303RoutingModule {}
