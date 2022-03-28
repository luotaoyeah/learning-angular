import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(elementRef: ElementRef<HTMLParagraphElement>) {
    elementRef.nativeElement.style.color = '#ff0000';
  }
}
