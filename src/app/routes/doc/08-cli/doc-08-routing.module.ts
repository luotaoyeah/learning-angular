import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc0801Component } from './08-01-overview/doc-08-01.component';
import { Doc0802Component } from './08-02-add/doc-08-02.component';
import { Doc0803Component } from './08-03-build/doc-08-03.component';
import { Doc0804Component } from './08-04-config/doc-08-04.component';
import { Doc0805Component } from './08-05-doc/doc-08-05.component';
import { Doc0806Component } from './08-06-e2e/doc-08-06.component';
import { Doc0807Component } from './08-07-generate/doc-08-07.component';
import { Doc0808Component } from './08-08-help/doc-08-08.component';
import { Doc0809Component } from './08-09-lint/doc-08-09.component';
import { Doc0810Component } from './08-10-new/doc-08-10.component';
import { Doc0811Component } from './08-11-run/doc-08-11.component';
import { Doc0812Component } from './08-12-serve/doc-08-12.component';
import { Doc0813Component } from './08-13-test/doc-08-13.component';
import { Doc0814Component } from './08-14-update/doc-08-14.component';
import { Doc0815Component } from './08-15-version/doc-08-15.component';
import { Doc0816Component } from './08-16-xi18n/doc-08-16.component';

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
  {
    path: '08/06',
    component: Doc0806Component,
  },
  {
    path: '08/07',
    component: Doc0807Component,
  },
  {
    path: '08/08',
    component: Doc0808Component,
  },
  {
    path: '08/09',
    component: Doc0809Component,
  },
  {
    path: '08/10',
    component: Doc0810Component,
  },
  {
    path: '08/11',
    component: Doc0811Component,
  },
  {
    path: '08/12',
    component: Doc0812Component,
  },
  {
    path: '08/13',
    component: Doc0813Component,
  },
  {
    path: '08/14',
    component: Doc0814Component,
  },
  {
    path: '08/15',
    component: Doc0815Component,
  },
  {
    path: '08/16',
    component: Doc0816Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc08RoutingModule {}
