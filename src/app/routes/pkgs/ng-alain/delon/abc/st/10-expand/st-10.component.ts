import { Component } from '@angular/core';
import { STColumn, STData } from '@delon/abc';

/*
 * https://netlify.ng-alain.com/components/table/zh#components-table-expand
 */
@Component({
  selector: 'app-st-10',
  templateUrl: './st-10.component.html',
})
export class St10Component {
  public users: Array<
    {
      id: number;
      name: string;
      age: number;
      description: string;
    } & STData
  > = Array(10)
    .fill({})
    .map((_item: {}, idx: number) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
        showExpand: idx !== 0,
        description: `${idx +
          1}. My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.`,
      };
    });
  public columns: Array<STColumn> = [
    { title: '编号', index: 'id' },
    { title: '姓名', index: 'name' },
    { title: '年龄', index: 'age' },
  ];
}
