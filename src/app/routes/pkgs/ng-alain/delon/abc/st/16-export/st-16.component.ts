import { Component, ViewChild } from '@angular/core';
import { STColumn, STComponent, STData } from '@delon/abc';

/*
 * https://netlify.ng-alain.com/components/table/zh#components-table-export
 */
@Component({
  selector: 'app-st-16',
  templateUrl: './st-16.component.html',
})
export class St16Component {
  @ViewChild('st')
  public st!: STComponent;

  // tslint:disable-next-line:no-any
  public data: Array<
    {
      id: number;
      picture: {
        thumbnail: string;
      };
      email: string;
      phone: string;
      price: number;
      registered: Date;
    } & STData
  > = Array(10000)
    .fill({})
    .map((_item: {}, index: number) => {
      return {
        id: index + 1,
        picture: {
          thumbnail: `https://randomuser.me/api/portraits/thumb/women/${Math.min(
            index + 1,
            30,
          )}.jpg`,
        },
        email: `e${index + 1}@qq.com`,
        phone: `phone - ${index + 1}`,
        price: Math.ceil(Math.random() * 10000000) + 10000000,
        registered: new Date(),
      };
    });
  public columns: Array<STColumn> = [
    { title: '编号', index: 'id' },
    {
      title: '头像',
      type: 'img',
      width: '50px',
      index: 'picture.thumbnail',
      exported: false,
    },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    {
      title: '数字',
      index: 'price',
      type: 'number',
      sort: {
        compare: (a, b) => a.price - b.price,
      },
    },
    { title: '货币', index: 'price', type: 'currency' },
    { title: '注册时间', type: 'date', index: 'registered' },
  ];
}
