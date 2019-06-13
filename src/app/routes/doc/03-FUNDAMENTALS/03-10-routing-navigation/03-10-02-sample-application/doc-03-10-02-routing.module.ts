import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { Doc031002Component } from './doc-03-10-02.component';
import { AuthGuard } from './auth/service/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'doc/fundamental/routing/sample-application',
        component: Doc031002Component,
        children: [
          {
            path: 'crisis-center',
            loadChildren:
              './crisis-center/crisis-center.module#CrisisCenterModule',
            data: {
              preload: true,
            },
          },
          {
            path: 'admin',
            loadChildren: './admin/admin.module#AdminModule',
            canLoad: [AuthGuard],
          },
          {
            path: 'login',
            loadChildren: './auth/auth.module#AuthModule',
          },
        ],
      },
      {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class Doc031002RoutingModule {}
