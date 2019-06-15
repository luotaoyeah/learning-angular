import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { Doc031002Component } from './doc-03-10-02.component';
import { AuthGuard } from './auth/services/auth.guard';

const routes: Routes = [
  {
    path: '03/10/02',
    component: Doc031002Component,
    children: [
      {
        path: 'crisis-center',
        loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule',
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc031002RoutingModule {}
