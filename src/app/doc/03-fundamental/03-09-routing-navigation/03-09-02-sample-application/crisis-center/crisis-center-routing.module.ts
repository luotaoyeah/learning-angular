import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocFundamentalRoutingSampleComponent } from '../doc-fundamental-routing-sample.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisHomeComponent } from './crisis-home/crisis-home.component';
import { CanDeactivateGuard } from '../auth/service/can-deactivate.guard';

const routes: Routes = [
  {
    path: 'doc/fundamental/routing/sample-application',
    component: DocFundamentalRoutingSampleComponent,
    children: [
      {
        path: 'crisis-center',
        component: CrisisCenterComponent,
        children: [
          {
            path: '',
            component: CrisisListComponent,
            children: [
              { path: '', component: CrisisHomeComponent },
              {
                path: ':id',
                component: CrisisDetailComponent,
                canDeactivate: [CanDeactivateGuard]
              }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule {}
