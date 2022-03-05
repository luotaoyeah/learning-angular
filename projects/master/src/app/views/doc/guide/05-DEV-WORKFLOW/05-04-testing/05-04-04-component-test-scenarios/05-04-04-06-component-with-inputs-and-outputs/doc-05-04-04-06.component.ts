import { Component, EventEmitter, Input, Output } from '@angular/core';

/*
 * https://angular.io/guide/testing#component-with-inputs-and-outputs
 */
@Component({
  selector: 'app--doc-05-04-04-06',
  templateUrl: './doc-05-04-04-06.component.html',
})
export class Doc05040406Component {
  @Input()
  public foo: string = '';

  @Output()
  public click01: EventEmitter<number> = new EventEmitter();

  public handleClick() {
    this.click01.emit(99);
  }
}
