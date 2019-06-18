import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelonAclComponent } from './delon-acl.component';
import { AclGuard01Component } from './acl-guard/01/acl-guard-01.component';
import { ACLCanType, ACLGuard } from '@delon/acl';

const routes: Routes = [
  {
    path: 'delon/acl',
    component: DelonAclComponent,
    children: [
      {
        path: 'guard01',
        component: AclGuard01Component,
        outlet: 'outlet01',
        canActivate: [ACLGuard],
        data: {
          /*
           * 通过 data.guard 属性, 定义该路由需要什么权限才能访问,
           * 其数据类型为 ACLCanType
           */
          guard: {
            role: ['r01'],
          } as ACLCanType,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgAlainDelonAclRoutingModule {}
