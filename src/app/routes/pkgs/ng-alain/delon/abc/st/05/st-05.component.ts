import { Component } from '@angular/core';
import { STChange, STColumn } from '@delon/abc';

/*
 * https://netlify.ng-alain.com/components/table/zh#components-table-row-click
 */
@Component({
  selector: 'app-st-05',
  templateUrl: './st-05.component.html',
})
export class St05Component {
  public url: string = `api/pkgs/ng-alain/delon/abc/st/01?total=2&field=list`;
  public columns: Array<STColumn> = [
    { title: '编号', index: 'id', width: 80 },
    { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email', width: 80 },
    { title: '电话', index: 'phone' },
    { title: '注册时间', type: 'date', index: 'registered' },
  ];

  public handleChange(stChange: STChange) {
    if (stChange.type === 'click') {
      console.log(stChange);
    }
  }
}
