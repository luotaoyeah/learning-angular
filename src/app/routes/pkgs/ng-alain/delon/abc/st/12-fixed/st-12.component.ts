import { Component } from '@angular/core';
import { STColumn, STData } from '@delon/abc';

/*
 * https://netlify.ng-alain.com/components/table/zh#components-table-fixed
 */
@Component({
  selector: 'app-st-12',
  templateUrl: './st-12.component.html',
})
export class St12Component {
  public users: Array<
    {
      id: number;
      name: string;
      age: number;
    } & STData
  > = Array(10)
    .fill({})
    .map((_item: {}, idx: number) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
      };
    });
  public columns: Array<STColumn> = [
    { title: '编号1', index: 'id', fixed: 'left', width: '100px' },
    { title: '编号2', index: 'id', fixed: 'left', width: '100px' },
    { title: '编号3', index: 'id', fixed: 'left', width: '100px' },
    { title: '编号4', index: 'id' },
    { title: '编号5', index: 'id' },
    { title: '编号6', index: 'id' },
    { title: '编号7', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '姓名10', index: 'name', fixed: 'right', width: '100px' },
    { title: '姓名11', index: 'name', fixed: 'right', width: '100px' },
    { title: '年龄12', index: 'age', fixed: 'right', width: '100px' },
  ];
}
