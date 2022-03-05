import { Directive, HostListener, Input } from '@angular/core';

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

  @HostListener('mouseenter')
  protected onMouseEnter(): void {
    this.log();
  }

  private log() {
    console.log(`%c[${Doc0302090402Directive.name}]\n`, `color:${this.borderColor}`);
  }
}
