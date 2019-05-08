import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc05Component } from './doc-05.component';
import { Doc0507Component } from './05-07-testing/doc-05-07.component';
import { Doc0507040801Component } from './05-07-testing/05-07-04-component-test-scenarios/05-07-04-08-routing-component/05-07-04-08-01/doc-05-07-04-08-01.component';

const routes: Routes = [
  {
    path: '05',
    component: Doc05Component,
    children: [
      {
        path: '07',
        component: Doc0507Component,
        children: [
          {
            path: '01',
            component: Doc0507040801Component,
            data: { title: 'app-doc-05-07-04-08-01' },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc05RoutingModule {}
