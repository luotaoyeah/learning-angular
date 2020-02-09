import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight04]',
})
export class Highlight04Directive {
  @Input('appHighlight04')
  public highlightColor!: string;

  constructor(private elementRef: ElementRef<HTMLParagraphElement>) {}

  @HostListener('mouseenter')
  public onMouseEnter() {
    this.elementRef.nativeElement.style.color = this.highlightColor || '#ff0000';
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.elementRef.nativeElement.style.color = '#000000';
  }
}
