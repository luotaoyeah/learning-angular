import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
} from '@angular/core';
import { ComnService } from '@core/comn/comn.service';
import { NzButtonComponent } from 'ng-zorro-antd';
import { Doc090102030304Directive } from './doc-09-01-02-03-03-04.directive';

@Component({
  selector: 'app-doc-09-01-02-03-03-04',
  templateUrl: './doc-09-01-02-03-03-04.component.html',
})
export class Doc090102030304Component implements OnInit, AfterContentInit {
  @ContentChild(NzButtonComponent)
  private button01!: NzButtonComponent;

  /*
   * 查询条件可以是一个 directive，
   * 此时获取到的是该 directive 的实例
   */
  @ContentChild(Doc090102030304Directive)
  private button02!: Doc090102030304Directive;

  constructor(private comnService: ComnService) {}

  public ngOnInit(): void {}

  public ngAfterContentInit(): void {
    console.log(
      this.comnService.getComponentLabel(Doc090102030304Component),
      this.button01,
    );
    console.log(
      this.comnService.getComponentLabel(Doc090102030304Component),
      this.button02,
    );
  }
}
