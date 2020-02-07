import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { Doc090102030304Directive } from './doc-09-01-02-03-03-04.directive';

@Component({
  selector: 'app--doc-09-01-02-03-03-04',
  templateUrl: './doc-09-01-02-03-03-04.component.html',
})
export class Doc090102030304Component implements AfterContentInit {
  @ContentChild(NzButtonComponent, { static: false })
  private button01!: NzButtonComponent;

  /*
   * 查询条件可以是一个 directive, 此时获取到的是该 directive 的实例
   */
  @ContentChild(Doc090102030304Directive, { static: false })
  private button02!: Doc090102030304Directive;

  public ngAfterContentInit(): void {
    console.log(`[${Doc090102030304Component.name}]\n`, this.button01);
    console.log(`[${Doc090102030304Component.name}]\n`, this.button02);
  }
}
