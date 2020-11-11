import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app--doc-03-02-02-10-03',
  templateUrl: './doc-03-02-02-10-03.component.html',
})
export class Doc0302021003Component implements OnInit {
  public values: Array<string> = ['FOO', 'BAR', 'BAZ'];
  public items: Array<Item> = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' },
  ];

  public ngOnInit() {}

  public reset() {
    this.items = [
      { id: 2, name: 'b' },
      { id: 3, name: 'c' },
      { id: 4, name: 'd' },
    ];
  }

  /**
   *
   * @param index 索引
   * @param item 元素
   */
  // @ts-ignore: TS6133
  public trackByItems(index: number, item: Item): number {
    return item.id;
  }
}

interface Item {
  id: number;
  name: string;
}