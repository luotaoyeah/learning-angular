import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisHomeComponent } from './crisis-home/crisis-home.component';
import { CanDeactivateGuard } from '../auth/services/can-deactivate.guard';
import { CrisisDetailResolverService } from './services/crisis-detail-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          { path: '', component: CrisisHomeComponent },
          {
            path: ':id',
            component: CrisisDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            /*
             * 在激活 (activate) 该路由之前, 需要先加载某些数据, 数据加载成功之后, 再激活路由, 类似于一个拦截器,
             * 这就是 resolve 的作用,
             * resolve 配置项是一个对象, 属性名表示某个要加载的数据对象, 属性值为对应的加载服务,
             * 加载服务是一个 data provider, 需要实现 Resolve 接口,
             * 跟 service provider 类似, 也是一个 injectable 对象
             */
            resolve: {
              crisis: CrisisDetailResolverService,
            },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrisisRoutingModule {
  constructor() {
    console.log(`[${CrisisRoutingModule.name}] - [模块延迟加载成功]`);
  }
}
