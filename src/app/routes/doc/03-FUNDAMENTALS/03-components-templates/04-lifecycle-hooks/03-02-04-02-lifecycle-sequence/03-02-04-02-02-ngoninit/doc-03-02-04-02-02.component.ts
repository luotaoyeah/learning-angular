import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-doc-03-02-04-02-02',
  templateUrl: './doc-03-02-04-02-02.component.html',
})
export class Doc0302040202Component implements OnInit, OnChanges {
  @Input()
  public foo: number = 0;
  @Input()
  public bar: string = '';

  public ngOnChanges(simpleChanges: SimpleChanges): void {
    console.log(`[${Doc0302040202Component.name}]\n`, 'ngOnChanges()');
  }

  /*
   * 当 component 完成初始化之后，ngOnInit() 就会执行，
   * 此时：
   *     ngOnChanges() 已经完成了第一次执行，因此 input property 已经完成了初始化，
   *     但是 template 中的 data-binding 尚未进行渲染
   */
  public ngOnInit(): void {
    console.log(`[${Doc0302040202Component.name}]\n`, 'ngOnInit()');
  }
}
