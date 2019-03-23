import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*
    {
      path: '',
      /!*
       * 如果浏览器当前路径跟上面的 path 相匹配，
       * 则跳转到 redirectTo 指定的路径，
       *
       * redirectTo 指定的路径可以是绝对路径（以 / 开头），
       * 也可以是相对路径（不以 / 开头），此时是相对于上面的 path 指定的路径
       *!/
      redirectTo: '/doc/tutorial/dashboard',
      /!*
       * 路径匹配策略，有两种方式：
       *     prefix（默认）：前缀匹配
       *     full：完全匹配
       *!/
      pathMatch: 'full'
    }
  */
];

@NgModule({
  /*
   * 如果一个 RouterModule 是用于 root module（AppModule） 的，
   * 则应该调用 RouterModule.forRoot() 方法
   */
  imports: [
    RouterModule.forRoot(routes, {
      /*
       * 在开发环境方便调试，可以开启 enableTracing 选项，
       * 开启之后，所有的路由事件都会打印到浏览器控制台
       */
      enableTracing: false
    })
  ],
  /*
   * 在 AppRoutingModule 中将 RouterModule 输出，
   * 这样在 AppModule 引入了 AppRoutingModule 之后，
   * AppModule 下面所有的组件中，也都可以使用 RouterModule 中的数据
   */
  exports: [RouterModule]
})
export class AppRoutingModule {}
