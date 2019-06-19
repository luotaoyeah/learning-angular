import { Component } from '@angular/core';
import { STColumn } from '@delon/abc';

/*
 * https://netlify.ng-alain.com/components/table/zh#components-table-basic
 */
@Component({
  selector: 'app-st-01',
  templateUrl: './st-01.component.html',
})
export class St01Component {
  public url: string = `api/pkgs/ng-alain/delon/abc/st/01?total=2&field=list`;
  public params = { a: 1, b: 2 };
  public columns: Array<STColumn> = [
    { title: '编号', index: 'id', width: 80 },
    { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email', width: 80 },
    { title: '电话', index: 'phone' },
    { title: '注册时间', type: 'date', index: 'registered' },
  ];
}
