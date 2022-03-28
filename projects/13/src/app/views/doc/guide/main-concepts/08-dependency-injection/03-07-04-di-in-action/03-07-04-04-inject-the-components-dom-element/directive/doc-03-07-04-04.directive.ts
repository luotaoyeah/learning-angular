import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDoc03070404]',
})
export class Doc03070404Directive implements OnInit {
  /*
   * 在 directive 的 constructor 中，可以注入该 directive 所在的 DOM 元素，
   * ElementRef 对 DOM 元素进行了一层包装，
   * ElementRef.nativeElement 属性表示真正的 DOM 元素
   */
  constructor(private elementRef: ElementRef) {}

  public ngOnInit(): void {
    const el = document.querySelector('#doc-03-07-04-04');
    console.assert(this.elementRef.nativeElement === el);
  }
}
