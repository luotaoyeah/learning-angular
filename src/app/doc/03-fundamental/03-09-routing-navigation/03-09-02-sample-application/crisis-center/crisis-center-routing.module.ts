import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocFundamentalRoutingSampleComponent } from '../doc-fundamental-routing-sample.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

const routes: Routes = [
  {
    path: 'doc/fundamental/routing/sample-application',
    component: DocFundamentalRoutingSampleComponent,
    children: [
      {
        path: 'crisis-center',
        component: CrisisListComponent
      },
      {
        path: 'crisis-center/:id',
        component: CrisisDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule {}
