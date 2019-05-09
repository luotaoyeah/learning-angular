import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDoc0302090301]',
})
export class Doc0302090301Directive {
  constructor(private elementRef: ElementRef<HTMLParagraphElement>) {
    elementRef.nativeElement.style.padding = '10px';
    elementRef.nativeElement.style.border = '1px solid #333';
    elementRef.nativeElement.style.borderRadius = '3px';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hover('#f00');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hover('');
  }

  private hover(color: string): void {
    this.elementRef.nativeElement.style.borderColor = color || '#333';
  }
}
