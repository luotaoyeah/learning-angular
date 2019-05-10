import { Directive, HostListener, Input } from '@angular/core';
import { ComnService } from '@core/comn/comn.service';

@Directive({
  selector: '[appDoc0302090402]',
})
export class Doc0302090402Directive {
  /*
   * 如果多个不同的 directive 拥有相同的 inpu property，
   * 则它们可以共用同一个 attribute data binding
   */
  @Input()
  public borderColor: string = '';

  constructor(private comnService: ComnService) {}

  @HostListener('mouseenter')
  protected onMouseEnter(): void {
    this.log();
  }

  private log() {
    console.log(
      `%c${this.comnService.getComponentLabel(Doc0302090402Directive)}`,
      `color:${this.borderColor}`,
    );
  }
}
