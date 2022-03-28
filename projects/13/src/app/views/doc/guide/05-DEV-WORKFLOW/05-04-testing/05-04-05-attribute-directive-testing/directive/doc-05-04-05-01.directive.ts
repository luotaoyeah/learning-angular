import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appDoc05040501]',
})
export class Doc05040501Directive implements OnChanges {
  public defaultColor: string = 'rgb(211, 211, 211)';

  @Input('appDoc05040501')
  public color: string | null = null;

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  public ngOnChanges(changes: SimpleChanges): void {
    this.elementRef.nativeElement.style.color = this.color || this.defaultColor;
  }
}
