import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { NzButtonComponent, NzTagComponent } from 'ng-zorro-antd';

@Component({
  selector: 'app--doc-09-01-02-03-03-03',
  templateUrl: './doc-09-01-02-03-03-03.component.html',
})
export class Doc090102030303Component implements AfterContentInit {
  /*
   * @ContentChild 装饰器, 用来获取对 content child 的引用,
   * 通过参数进行查询, 返回第一个满足查询条件的 content child
   */
  @ContentChild(NzButtonComponent, { static: false })
  private button!: HTMLButtonElement;

  @ContentChild(NzTagComponent, { static: false })
  private nzTagComponent!: NzTagComponent;

  public ngAfterContentInit(): void {
    /*
     * 通过 @ContentChild 引用的 content child,
     * 会在 ngAfterContentInit() 调用之前设置完成
     */
    console.log(`[${Doc090102030303Component.name}]\n`, this.button);
    console.log(`[${Doc090102030303Component.name}]\n`, this.nzTagComponent);
  }
}
