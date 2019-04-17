import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030401Component } from './03-04-01-observables/doc-03-04-01.component';
import { Doc030402Component } from './03-04-02-the-rxjs-library/doc-03-04-02.component';
import { Doc030403Component } from './03-04-03-observables-in-angular/doc-03-04-03.component';
import { Doc030404Component } from './03-04-04-practical-usage/doc-03-04-04.component';
import { Doc030405Component } from './03-04-05-compare-to-other-techniques/doc-03-04-05.component';

const routes: Routes = [
  {
    path: '03/04/01',
    component: Doc030401Component,
  },
  {
    path: '03/04/02',
    component: Doc030402Component,
  },
  {
    path: '03/04/03',
    component: Doc030403Component,
  },
  {
    path: '03/04/04',
    component: Doc030404Component,
  },
  {
    path: '03/04/05',
    component: Doc030405Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0304RoutingModule {}
