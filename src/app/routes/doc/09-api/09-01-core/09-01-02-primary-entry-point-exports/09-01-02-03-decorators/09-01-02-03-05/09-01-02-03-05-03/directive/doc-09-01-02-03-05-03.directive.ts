import { Directive, EventEmitter, OnInit } from '@angular/core';

/*
 * 除了可以使用 @Output() 声明 output property 之外，
 * 也可以使用 @Directive.outputs 来声明 output property，这种方式已经**废弃**
 */
@Directive({
  selector: '[appDoc090102030503]',
  /*
   * 每一个 string 分成两个部分，
   * : 前面的部分表示 directive output property name，
   * : 后面的部分表示 binding property name
   */
  // tslint:disable-next-line:use-output-property-decorator
  outputs: ['changeColor: appDoc090102030503ChangeColor'],
})
export class Doc090102030503Directive implements OnInit {
  public changeColor: EventEmitter<string> = new EventEmitter();

  constructor() {}

  public ngOnInit(): void {
    setTimeout(() => {
      this.changeColor.emit('#f00');
    }, 3000);
  }
}
