import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { DocFundamentalRoutingSampleComponent } from './doc-fundamental-routing-sample.component';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './auth/service/auth.guard';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'doc/fundamental/routing/sample-application',
        component: DocFundamentalRoutingSampleComponent,
        children: [
          {
            path: 'crisis-center',
            loadChildren: () => CrisisCenterModule,
            data: {
              preload: true
            }
          },
          {
            path: 'admin',
            loadChildren: () => AdminModule,
            canLoad: [AuthGuard]
          },
          {
            path: 'login',
            loadChildren: './auth/auth.module#AuthModule'
          }
        ]
      },
      /*
       * TODO
       *   named router-outlet 没有验证成功
       */
      {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
      }
    ])
  ],
  exports: [RouterModule]
})
export class DocFundamentalRoutingSampleRoutingModule {}
