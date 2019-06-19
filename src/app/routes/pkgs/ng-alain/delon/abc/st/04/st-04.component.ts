import { Component } from '@angular/core';
import { STChange, STColumn, STData } from '@delon/abc';

/*
 * https://netlify.ng-alain.com/components/table/zh#components-table-checkbox
 */
@Component({
  selector: 'app-st-04',
  templateUrl: './st-04.component.html',
})
export class St04Component {
  public url: string = `api/pkgs/ng-alain/delon/abc/st/01?total=2&field=list`;
  public params = { a: 1, b: 2 };
  public columns: Array<STColumn> = [
    { title: '编号', index: 'id', width: 80, type: 'checkbox' },
    { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email', width: 80 },
    { title: '电话', index: 'phone' },
    { title: '注册时间', type: 'date', index: 'registered' },
  ];

  public dataProcess(data: Array<STData>): Array<STData> {
    return data.map((i: STData, index: number) => {
      i.disabled = index === 0;
      return i;
    });
  }

  public handleChange($event: STChange) {
    console.log($event);
  }
}
