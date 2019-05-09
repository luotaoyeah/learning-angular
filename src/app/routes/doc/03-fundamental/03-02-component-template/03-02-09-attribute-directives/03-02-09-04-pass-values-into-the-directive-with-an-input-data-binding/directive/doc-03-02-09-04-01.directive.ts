import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDoc0302090401]',
})
export class Doc0302090401Directive {
  @Input()
  public borderColor: string = '#f00';

  constructor(private elementRef: ElementRef<HTMLParagraphElement>) {
    elementRef.nativeElement.style.padding = '10px';
    elementRef.nativeElement.style.border = '1px solid #333';
    elementRef.nativeElement.style.borderRadius = '3px';
  }

  @HostListener('mouseenter')
  onMouseEntere(): void {
    this.hover(this.borderColor);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.hover('');
  }

  private hover(color: string): void {
    this.elementRef.nativeElement.style.borderColor = color || '#333';
  }
}
