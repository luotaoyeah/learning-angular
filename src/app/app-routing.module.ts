import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './doc/02-tutorial/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'doc/tutorial/dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    /*
     * 如果浏览器当前路径跟上面的 path 相匹配，
     * 则跳转到 redirectTo 指定的路径，
     *
     * redirectTo 指定的路径可以是绝对路径（以 / 开头），
     * 也可以是相对路径（不以 / 开头），此时是相对于上面的 path 指定的路径
     */
    redirectTo: '/doc/tutorial/dashboard',
    /*
     * 路径匹配策略，有两种方式：
     *     prefix（默认）：前缀匹配
     *     full：完全匹配
     */
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  /*
   * 在 AppRoutingModule 中将 RouterModule 输出，
   * 这样在 AppModule 引入了 AppRoutingModule 之后，
   * AppModule 下面所有的组件中，也都可以使用 RouterModule 中的数据
   */
  exports: [RouterModule]
})
export class AppRoutingModule {}
