import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './tutorial/heroes/heroes.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
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
