import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appDoc05070501]',
})
export class Doc05070501Directive implements OnChanges {
  private defaultColor: string = 'rgb(211, 211, 211)';

  @Input('appDoc05070501')
  public bgColor!: string;

  constructor(private elementRef: ElementRef<HTMLElement>) {
    // @ts-ignore
    elementRef.nativeElement.style.customProperty = true;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.elementRef.nativeElement.style.color =
      this.bgColor || this.defaultColor;
  }
}
