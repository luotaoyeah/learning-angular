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
        path: 'crisis',
        loadChildren: () => import('./crisis/crisis.module').then(m => m.CrisisModule),
        data: {
          preload: true,
        },
      },
      {
        path: 'hero',
        loadChildren: () => import('./hero/hero.module').then(m => m.HeroModule),
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canLoad: [AuthGuard],
      },
      {
        path: 'login',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
      },
      {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc031002RoutingModule {}
