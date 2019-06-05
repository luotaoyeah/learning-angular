import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc0507Component } from './doc-05-07.component';
import { Doc0507040801Component } from './05-07-04-component-test-scenarios/05-07-04-08-routing-component/05-07-04-08-01/doc-05-07-04-08-01.component';
import { Doc0507040901Component } from './05-07-04-component-test-scenarios/05-07-04-09-routed-component/05-07-04-09-01/doc-05-07-04-09-01.component';

const routs: Routes = [
  {
    path: '05/07',
    component: Doc0507Component,
    children: [
      {
        path: '04/08/01',
        component: Doc0507040801Component,
        data: { title: 'app-doc-05-07-04-08-01' },
      },
      {
        path: '04/09/01',
        component: Doc0507040901Component,
        data: { title: 'app-doc-05-07-04-09-01' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routs)],
  exports: [RouterModule],
})
export class Doc0507RoutingModule {}
