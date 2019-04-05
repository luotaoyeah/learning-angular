import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight05]',
})
export class Highlight05Directive {
  @Input('appHighlight05') highlightColor!: string;

  @Input() defaultColor!: string;

  constructor(private elementRef: ElementRef<HTMLParagraphElement>) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.style.color =
      this.highlightColor || this.defaultColor || '#ff0000';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.color = '#000000';
  }
}
