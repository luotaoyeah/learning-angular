import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDoc0302090401]',
})
export class Doc0302090401Directive {
  /*
   * directive 可以通过 @Input() 添加 input property，
   * 在使用的时候，这个 directive 和这个 input property 作为某个 element 的两个不同的 attribute
   */
  @Input()
  public borderColor: string = '#f00';

  constructor(private elementRef: ElementRef<HTMLParagraphElement>) {
    elementRef.nativeElement.style.padding = '10px';
    elementRef.nativeElement.style.border = '1px solid #333';
    elementRef.nativeElement.style.borderRadius = '3px';
  }

  @HostListener('mouseenter')
  public onMouseEntere(): void {
    this.hover(this.borderColor);
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.hover('');
  }

  private hover(color: string): void {
    this.elementRef.nativeElement.style.borderColor = color || '#333';
  }
}
