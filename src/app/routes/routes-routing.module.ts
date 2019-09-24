import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutDefaultComponent } from '../layout/default/layout-default.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      /*
       * redirectTo 后面的路径可以是相对路径, 也可以是绝对路径(以 / 开头),
       * 当使用绝对路径时, 可以直接在路径后面添加 query parameters 和 fragment
       */
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'exception',
        loadChildren: () => import('../layout/exception/exception.module').then(m => m.ExceptionModule),
      },
      {
        path: 'doc',
        loadChildren: () => import('./doc/doc.module').then(m => m.DocModule),
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
      },
      {
        path: 'pkgs/ng-alain',
        loadChildren: () => import('./pkgs/ng-alain/ng-alain.module').then(m => m.NgAlainModule),
      },
      {
        path: 'pkgs/jasmine',
        loadChildren: () => import('./pkgs/jasmine/jasmine.module').then(m => m.JasmineModule),
      },
      {
        path: 'pkgs/ngx-translate',
        loadChildren: () => import('./pkgs/ngx-translate/ngx-translate.module').then(m => m.NgxTranslateModule),
      },
      {
        path: 'pkgs/ngrx',
        loadChildren: () => import('./pkgs/ngrx/ngrx.module').then(m => m.NgrxModule),
      },
      {
        path: 'pkgs/angular-gridster2',
        loadChildren: () =>
          import('./pkgs/angular-gridster2/angular-gridster2.module').then(m => m.AngularGridster2Module),
      },
    ],
  },
  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
