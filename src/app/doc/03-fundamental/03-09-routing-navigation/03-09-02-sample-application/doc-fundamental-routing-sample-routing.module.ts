import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { DocFundamentalRoutingSampleComponent } from './doc-fundamental-routing-sample.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'doc/fundamental/routing/sample-application',
        component: DocFundamentalRoutingSampleComponent,
        children: [
          {
            path: 'admin',
            loadChildren: () => AdminModule
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
