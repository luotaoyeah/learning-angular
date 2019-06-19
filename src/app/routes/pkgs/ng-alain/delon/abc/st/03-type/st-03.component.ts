import { Component } from '@angular/core';
import { STColumn, STComponent, STData } from '@delon/abc';

/*
 * https://netlify.ng-alain.com/components/table/zh#components-table-type
 */
@Component({
  selector: 'app-st-03',
  templateUrl: './st-03.component.html',
})
export class St03Component {
  public users: Array<
    {
      id: number;
      age: number;
      tag: number;
      badge: number;
      yn: boolean;
    } & STData
  > = [];
  public columns: Array<STColumn> = [
    { title: '行号', type: 'no' },
    { title: '年龄', index: 'age', type: 'number' },
    {
      title: 'tag',
      index: 'tag',
      type: 'tag',
      tag: {
        1: { text: '成功', color: 'green' },
        2: { text: '错误', color: 'red' },
        3: { text: '进行中', color: 'blue' },
        4: { text: '默认', color: '' },
        5: { text: '警告', color: 'orange' },
      },
    },
    {
      title: 'badge',
      index: 'badge',
      type: 'badge',
      badge: {
        1: { text: '成功', color: 'success' },
        2: { text: '错误', color: 'error' },
        3: { text: '进行中', color: 'processing' },
        4: { text: '默认', color: 'default' },
        5: { text: '警告', color: 'warning' },
      },
    },
    { title: 'yn', index: 'yn', type: 'yn' },
    { title: 'checked', index: 'checked', type: 'checkbox' },
    { title: 'radio', index: 'checked', type: 'radio' },
    { title: 'img', index: 'img', type: 'img' },
    { title: 'date', index: 'date', type: 'date' },
    {
      title: 'link',
      index: 'link',
      type: 'link',
      click(record: STData, instance?: STComponent) {
        window.location.href = record.link;
      },
    },
  ];

  constructor() {
    this.load();
  }

  private random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public load(): void {
    this.users = Array(10)
      .fill({})
      .map((_item: {}, idx: number) => {
        return {
          id: idx + 1,
          age: this.random(10, 50),
          tag: this.random(1, 5),
          badge: this.random(1, 5),
          yn: [true, false][this.random(1, 5) % 2],
          checked: [true, false][this.random(1, 5) % 2],
          link: 'https://www.google.com',
          img: 'https://randomuser.me/api/portraits/thumb/women/13.jpg',
          date: Date.now(),
        };
      });
  }
}
