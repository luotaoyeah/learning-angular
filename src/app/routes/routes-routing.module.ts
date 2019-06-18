import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleGuard } from '@delon/auth';
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { LayoutPassportComponent } from '../layout/passport/passport.component';
import { LoginComponent } from './passport/login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { UserLockComponent } from './passport/lock/lock.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    canActivate: [SimpleGuard],
    children: [
      /*
       * redirectTo 后面的路径可以是相对路径, 也可以是绝对路径(以 / 开头),
       * 当使用绝对路径时, 可以直接在路径后面添加 query parameters 和 fragment
       */
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'exception',
        loadChildren: './exception/exception.module#ExceptionModule',
      },
      {
        path: 'doc',
        loadChildren: './doc/doc.module#DocModule',
      },
      {
        path: 'blog',
        loadChildren: './blog/blog.module#BlogModule',
      },
      {
        path: 'pkgs/ng-alain',
        loadChildren: './pkgs/ng-alain/ng-alain.module#NgAlainModule',
      },
      {
        path: 'pkgs/jasmine',
        loadChildren: './pkgs/jasmine/jasmine.module#JasmineModule',
      },
      {
        path: 'pkgs/ngx-translate',
        loadChildren:
          './pkgs/ngx-translate/ngx-translate.module#NgxTranslateModule',
      },
      {
        path: 'pkgs/ngrx',
        loadChildren: './pkgs/ngrx/ngrx.module#NgrxModule',
      },
      {
        path: 'pkgs/angular-gridster2',
        loadChildren:
          './pkgs/angular-gridster2/angular-gridster2.module#AngularGridster2Module',
      },
    ],
  },
  // 全屏布局
  // {
  //     path: 'fullscreen',
  //     component: LayoutFullScreenComponent,
  //     children: [
  //     ]
  // },
  {
    path: 'passport',
    component: LayoutPassportComponent,
    children: [
      { path: 'login', component: LoginComponent, data: { title: '登录' } },
      { path: 'lock', component: UserLockComponent, data: { title: '锁屏' } },
    ],
  },
  { path: 'callback/:type', component: CallbackComponent },
  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
