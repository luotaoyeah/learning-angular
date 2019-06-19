import { Component } from '@angular/core';
import { STColumn, STData } from '@delon/abc';
import { NzMessageService } from 'ng-zorro-antd';
import { St1101ModalComponent } from './01/st-11-01.modal.component';
import { St1101DrawerComponent } from './01/st-11-01.drawer.component';

/*
 * https://netlify.ng-alain.com/components/table/zh#components-table-buttons
 */
@Component({
  selector: 'app-st-11',
  templateUrl: './st-11.component.html',
})
export class St11Component {
  constructor(private message: NzMessageService) {}

  public users: Array<
    { id: number; name: string; age: number } & STData
  > = Array(10)
    .fill({})
    .map((_item: {}, idx: number) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
      };
    });

  public columns: STColumn[] = [
    { title: '序号', type: 'no' },
    { title: '编号', index: 'id' },
    { title: '姓名', index: 'name' },
    { title: '年龄', index: 'age' },
    {
      title: '操作区',
      buttons: [
        {
          text: 'MODAL',
          icon: 'edit',
          type: 'modal',
          modal: {
            component: St1101ModalComponent,
          },
          click: (_record, modal) =>
            this.message.success(
              `重新加载页面，回传值：${JSON.stringify(modal)}`,
            ),
        },
        {
          text: 'DRAWER',
          type: 'drawer',
          drawer: {
            title: '编辑',
            component: St1101DrawerComponent,
          },
          click: (_record, modal) =>
            this.message.success(
              `重新加载页面，回传值：${JSON.stringify(modal)}`,
            ),
        },
        {
          icon: 'check-circle',
          click: record => this.message.info(`check-${record.name}`),
          iif: record => record.id % 2 === 0,
          iifBehavior: 'disabled',
        },
        {
          icon: 'delete',
          type: 'del',
          click: (record, _modal, comp) => {
            this.message.success(`成功删除 [${record.name}] `);
            // tslint:disable-next-line:no-non-null-assertion
            comp!.removeRow(record);
          },
          iif: record => record.id % 2 === 0,
        },
        {
          text: '更多',
          children: [
            {
              text: record => (record.id === 1 ? `过期` : `正常`),
              click: record =>
                this.message.error(
                  `${record.id === 1 ? `过期` : `正常`} [${record.name}] `,
                ),
            },
            {
              text: `重新开始`,
              icon: 'edit',
              click: record =>
                this.message.success(`重新开始 [${record.name}] `),
            },
            {
              text: `审核`,
              click: record => this.message.info(`check-${record.name}`),
              iif: record => record.id % 2 === 0,
              iifBehavior: 'disabled',
            },
          ],
        },
      ],
    },
  ];
}
