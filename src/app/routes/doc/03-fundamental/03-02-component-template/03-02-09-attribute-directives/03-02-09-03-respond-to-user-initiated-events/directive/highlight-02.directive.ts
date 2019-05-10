import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight02]',
})
export class Highlight02Directive {
  constructor(private elementRef: ElementRef<HTMLParagraphElement>) {}

  @HostListener('mouseenter')
  public onMouseEnter() {
    this.elementRef.nativeElement.style.color = '#f00';
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.elementRef.nativeElement.style.color = '#000';
  }
}
