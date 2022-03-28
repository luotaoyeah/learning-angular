import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDoc0302090201]',
})
export class Doc0302090201Directive {
  constructor(elementRef: ElementRef<HTMLParagraphElement>) {
    elementRef.nativeElement.style.padding = '10px';
    elementRef.nativeElement.style.border = '1px solid #333';
    elementRef.nativeElement.style.borderRadius = '3px';
  }
}
