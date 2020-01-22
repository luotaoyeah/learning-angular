import { Component, EventEmitter, Input, Output } from '@angular/core';

/*
 * https://angular.io/guide/testing#component-inside-a-test-host
 */
@Component({
  selector: 'app--doc-05-04-04-07',
  templateUrl: './doc-05-04-04-07.component.html',
})
export class Doc05040407Component {
  @Input()
  public foo: string = '';

  @Output()
  public click01: EventEmitter<number> = new EventEmitter();

  public handleClick() {
    this.click01.emit(99);
  }
}
