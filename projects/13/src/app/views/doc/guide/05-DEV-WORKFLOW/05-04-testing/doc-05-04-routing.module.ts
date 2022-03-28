import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc0504Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/doc-05-04.component';
import { Doc0504040801Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-08-routing-component/05-04-04-08-01/doc-05-04-04-08-01.component';
import { Doc0504040901Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-09-routed-component/05-04-04-09-01/doc-05-04-04-09-01.component';

const routs: Routes = [
  {
    path: '05/04',
    component: Doc0504Component,
    children: [
      {
        path: '04/08/01',
        component: Doc0504040801Component,
        data: { title: 'app-doc-05-04-04-08-01' },
      },
      {
        path: '04/09/01',
        component: Doc0504040901Component,
        data: { title: 'app-doc-05-04-04-09-01' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routs)],
  exports: [RouterModule],
})
export class Doc0504RoutingModule {}
