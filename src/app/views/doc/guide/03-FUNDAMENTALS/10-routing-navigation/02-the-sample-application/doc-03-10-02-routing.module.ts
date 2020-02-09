import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposeMessageComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/10-routing-navigation/02-the-sample-application/compose-message/compose-message.component';
import { Doc031002Component } from '@app/views/doc/guide/03-FUNDAMENTALS/10-routing-navigation/02-the-sample-application/doc-03-10-02.component';
import { AuthGuard } from '@app/views/doc/guide/03-FUNDAMENTALS/10-routing-navigation/02-the-sample-application/auth/services/auth.guard';

const routes: Routes = [
  {
    path: '03/10/02',
    component: Doc031002Component,
    children: [
      {
        path: 'crisis',
        loadChildren: () => import('./crisis/crisis.module').then((m) => m.CrisisModule),
        data: {
          preload: true,
        },
      },
      {
        path: 'hero',
        loadChildren: () => import('./hero/hero.module').then((m) => m.HeroModule),
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
        canLoad: [AuthGuard],
      },
      {
        path: 'login',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
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
