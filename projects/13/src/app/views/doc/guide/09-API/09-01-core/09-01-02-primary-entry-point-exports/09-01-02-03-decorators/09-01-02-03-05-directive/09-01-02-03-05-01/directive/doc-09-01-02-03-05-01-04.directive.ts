import { Directive, ElementRef } from '@angular/core';

/*
 * 一个 directive 可以同时声明多个 selectors，使用 , 分隔
 */
@Directive({
  selector: '[appDoc09010203050104], .doc-09-01-02-03-05-01-04',
})
export class Doc09010203050104Directive {
  constructor(elementRef: ElementRef<HTMLButtonElement>) {
    elementRef.nativeElement.style.color = '#f0f';
  }
}
