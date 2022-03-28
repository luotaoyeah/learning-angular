import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDoc0302090404]',
})
export class Doc0302090404Directive {
  /*
   * 通过 @Input() 的参数设置了绑定别名之后，
   * 在内部依然使用 class member 的名称，在外部则使用这个别名进行绑定
   */
  @Input('appDoc0302090404')
  public borderColor!: string;

  constructor(private elementRef: ElementRef<HTMLParagraphElement>) {
    elementRef.nativeElement.style.padding = '10px';
    elementRef.nativeElement.style.border = '1px solid #333';
    elementRef.nativeElement.style.borderRadius = '3px';
  }

  @HostListener('mouseenter')
  protected onMouseEnter(): void {
    this.hover(this.borderColor);
  }

  @HostListener('mouseleave')
  protected onMouseLeave(): void {
    this.hover('');
  }

  private hover(color: string): void {
    this.elementRef.nativeElement.style.borderColor = color || '#333';
  }
}
