import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from '../auth/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      /*
       * route configuration 中可以不指定 component, 称之为 component-less route,
       * 主要的作用是, 将多个 child routes 放到一个分组里面, 方便统一地进行 guard 控制
       */
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            component: AdminDashboardComponent,
            data: {
              title: 'ADMIN',
            },
          },
          {
            path: 'heroes',
            component: ManageHeroesComponent,
            data: {
              title: 'MANAGE HEROES',
            },
          },
          {
            path: 'crises',
            component: ManageCrisesComponent,
            data: {
              title: 'MANAGE CRISES',
            },
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
export class AdminRoutingModule {}
