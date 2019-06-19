import { Component } from '@angular/core';
import { STColumn, STData } from '@delon/abc';

/*
 * https://netlify.ng-alain.com/components/table/zh#components-table-render
 */
@Component({
  selector: 'app-st-09',
  templateUrl: './st-09.component.html',
})
export class St09Component {
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
  public columns: Array<STColumn> = [
    { title: '编号', index: 'id' },
    { title: '姓名', index: 'name', iif: () => this.showColumn('name') },
    { title: '年龄', index: 'age', iif: () => this.showColumn('age') },
    /*
     * 使用 renderTile 和 render 分别用来自定义表格列头和列体
     */
    {
      title: '自定义',
      renderTitle: 'customTitle01',
      render: 'custom',
      iif: () => this.showColumn('custom'),
    },
  ];
  public customColumns = [
    { label: '姓名', value: 'name', checked: true },
    { label: '年龄', value: 'age', checked: true },
    { label: '自定义', value: 'custom', checked: true },
  ];
  public searchValue: string = '';

  public showColumn(key: string): boolean {
    return !!this.customColumns.find(w => w.value === key && w.checked);
  }
}
