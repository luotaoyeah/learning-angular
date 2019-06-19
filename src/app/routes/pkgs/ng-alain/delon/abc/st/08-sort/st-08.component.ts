import { Component, OnInit } from '@angular/core';
import { STColumn, STData, STPage } from '@delon/abc';
import { _HttpClient } from '@delon/theme';

/*
 * https://netlify.ng-alain.com/components/table/zh#components-table-sort
 */
@Component({
  selector: 'app-st-08',
  templateUrl: './st-08.component.html',
})
export class St08Component implements OnInit {
  public users: Array<
    STData & {
      id: number;
      name: string;
      age: number;
      status: number;
    }
  > = [];

  public columns: Array<STColumn> = [
    { title: '编号', index: 'id' },
    { title: '头像', type: 'img', width: '80px', index: 'picture.thumbnail' },
    {
      title: '姓名',
      index: 'name.last',
      // tslint:disable-next-line:no-any
      format: (item: any) => `${item.name.last} ${item.name.first}`,
      sort: true,
    },
    {
      title: '国家',
      index: 'nat',
      filter: {
        menus: [
          { text: '中国', value: 'CH' },
          { text: '美国', value: 'US' },
          { text: '德国', value: 'DE' },
        ],
      },
      sort: true,
    },
    {
      title: '性别',
      index: 'gender',
      filter: {
        menus: [
          { text: 'male', value: 'male' },
          { text: 'female', value: 'female' },
        ],
        multiple: false,
      },
      sort: true,
    },
    { title: '注册时间', type: 'date', index: 'registered' },
  ];
  public page: STPage = {
    front: false,
  };
  public total: number = 0;
  public loading: boolean = false;

  constructor(private httpClient: _HttpClient) {}

  public ngOnInit(): void {
    this.load();
  }

  public load(): void {
    this.loading = true;
    this.httpClient.get('api/pkgs/ng-alain/delon/abc/st/08').subscribe(res => {
      this.users = res.items;
      this.total = res.total;
      this.loading = false;
    });
  }
}
