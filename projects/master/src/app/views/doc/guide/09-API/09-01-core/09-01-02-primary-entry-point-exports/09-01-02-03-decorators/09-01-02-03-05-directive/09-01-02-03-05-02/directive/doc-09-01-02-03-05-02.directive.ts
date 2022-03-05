import { Directive, ElementRef, OnInit } from '@angular/core';

/*
 * 除了可以使用 @Input() 来声明 input property 之外，
 * 也可以使用 @Directive.inputs 来声明 input property，这种方式已经**废弃**
 */
@Directive({
  selector: '[appDoc090102030502]',
  /*
   * 每个 string 分成两个部分，
   * : 前面的表示 directive input property name
   * : 后面的表示 binding property name
   */
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: ['color: appDoc090102030502'],
})
export class Doc090102030502Directive implements OnInit {
  public color!: string;

  constructor(private elementRef: ElementRef<HTMLButtonElement>) {}

  public ngOnInit(): void {
    this.elementRef.nativeElement.style.color = this.color;
  }
}
