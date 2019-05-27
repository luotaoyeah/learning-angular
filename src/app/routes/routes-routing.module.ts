import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleGuard } from '@delon/auth';
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { LayoutPassportComponent } from '../layout/passport/passport.component';
// dashboard pages
// passport pages
import { LoginComponent } from './passport/login/login.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
import { UserLockComponent } from './passport/lock/lock.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    canActivate: [SimpleGuard],
    children: [
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
    ],
  },
  // 全屏布局
  // {
  //     path: 'fullscreen',
  //     component: LayoutFullScreenComponent,
  //     children: [
  //     ]
  // },
  // passport
  {
    path: 'passport',
    component: LayoutPassportComponent,
    children: [
      { path: 'login', component: LoginComponent, data: { title: '登录' } },
      { path: 'lock', component: UserLockComponent, data: { title: '锁屏' } },
    ],
  },
  // 单页不包裹布局
  { path: 'callback/:type', component: CallbackComponent },
  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
      // Pls refer to https://ng-alain.com/components/reuse-tab
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
