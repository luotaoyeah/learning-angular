import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDoc0302090403]',
})
export class Doc0302090403Directive {
  /*
   * 如果 input property 的名称跟 directive 的 selector 一样，
   * 则在 element 上，directive attribute 和 input property attribute 可以合二为一，
   * 但是这种方式的缺点是，input property 的名称变得不直观，不能知其意
   */
  @Input()
  public appDoc0302090403!: string;

  constructor(private elementRef: ElementRef<HTMLParagraphElement>) {
    elementRef.nativeElement.style.padding = '10px';
    elementRef.nativeElement.style.border = '1px solid #333';
    elementRef.nativeElement.style.borderRadius = '3px';
  }

  @HostListener('mouseenter')
  protected onMouseEnter(): void {
    this.hover(this.appDoc0302090403);
  }

  @HostListener('mouseleave')
  protected onMouseLeave(): void {
    this.hover('');
  }

  private hover(color: string): void {
    this.elementRef.nativeElement.style.borderColor = color || '#333';
  }
}
