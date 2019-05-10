import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  OnInit,
} from '@angular/core';
import { Doc0302040802Component } from './doc-03-02-04-08-02.component';

@Component({
  selector: 'app-doc-03-02-04-08-01',
  templateUrl: './doc-03-02-04-08-01.component.html',
})
export class Doc0302040801Component
  implements OnInit, DoCheck, AfterContentInit, AfterContentChecked {
  /*
   * 通过 @ContentChild() 装饰器获取到对 content child 对象实例的引用
   */
  @ContentChild(Doc0302040802Component)
  public contentChild!: Doc0302040802Component;

  constructor() {}

  public ngOnInit(): void {}

  public ngDoCheck(): void {}

  /*
   * ngAfterContentInit() 在 content projection 初始化完成之后调用，
   * 在 ngDoCheck() 第一次执行之后调用
   *
   */
  public ngAfterContentInit(): void {}

  /*
   * ngAfterContentChecked() 在 ngAfterContentInit() 之后执行，
   * 并且在后续的每一次 ngDoCheck() 之后执行
   */
  public ngAfterContentChecked(): void {}
}
