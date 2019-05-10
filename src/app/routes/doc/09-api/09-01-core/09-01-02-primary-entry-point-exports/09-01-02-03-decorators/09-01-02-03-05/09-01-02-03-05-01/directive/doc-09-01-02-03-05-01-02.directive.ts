import { Directive, ElementRef } from '@angular/core';

/*
 * directive 的 selector 可以是一个 class name
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '.doc-09-01-02-03-05-01-01',
})
export class Doc09010203050102Directive {
  constructor(elementRef: ElementRef<HTMLButtonElement>) {
    elementRef.nativeElement.style.color = '#f00';
  }
}
