import { Directive, ElementRef } from '@angular/core';

/*
 * directive 的 selector 可以是 [attribute=value] 的形式，
 * 当某个 element 上存在这个 attribute，并且它的值就是这个 value 时，
 * 它才会被识别为是这个 directive
 */
@Directive({
  selector: '[appDoc09010203050103="true"]',
})
export class Doc09010203050103Directive {
  constructor(elementRef: ElementRef<HTMLButtonElement>) {
    elementRef.nativeElement.style.color = '#f00';
  }
}
