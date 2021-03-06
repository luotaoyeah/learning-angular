import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@app/views/home/home.component';

const routes: Routes = [
  /*
   * redirectTo 后面的路径可以是相对路径, 也可以是绝对路径(以 / 开头),
   * 当使用绝对路径时, 可以直接在路径后面添加 query parameters 和 fragment
   */
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'doc',
    loadChildren: () => import('./doc/guide/doc--guide.module').then((m) => m.DocGuideModule),
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'pkgs/jasmine',
    loadChildren: () => import('./package/jasmine/jasmine.module').then((m) => m.JasmineModule),
  },
  {
    path: 'pkgs/ngx-translate',
    loadChildren: () => import('./package/ngx-translate/ngx-translate.module').then((m) => m.NgxTranslateModule),
  },
  {
    path: 'exception',
    loadChildren: () => import('./exception/exception.module').then((m) => m.ExceptionModule),
  },
  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {}
