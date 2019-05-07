import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
} from '@angular/core';
import { ComnService } from '@core/comn/comn.service';
import { NzButtonComponent, NzTagComponent } from 'ng-zorro-antd';

@Component({
  selector: 'app-doc-09-01-02-03-03-03',
  templateUrl: './doc-09-01-02-03-03-03.component.html',
})
export class Doc090102030303Component implements OnInit, AfterContentInit {
  /*
   * @ContentChild 装饰器，用来获取对 content child 的引用，
   * 通过参数进行查询，返回第一个满足查询条件的 content child
   */
  @ContentChild(NzButtonComponent)
  private button!: HTMLButtonElement;

  @ContentChild(NzTagComponent)
  private nzTagComponent!: NzTagComponent;

  constructor(private comnService: ComnService) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    /*
     * 通过 @ContentChild 引用的 content child，
     * 会在 ngAfterContentInit() 调用之前设置完成
     */
    console.log(
      this.comnService.getComponentLabel(Doc090102030303Component),
      this.button,
    );
    console.log(
      this.comnService.getComponentLabel(Doc090102030303Component),
      this.nzTagComponent,
    );
  }
}
