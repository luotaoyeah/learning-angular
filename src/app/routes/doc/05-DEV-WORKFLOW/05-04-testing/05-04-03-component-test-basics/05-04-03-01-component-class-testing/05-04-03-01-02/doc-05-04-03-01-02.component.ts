import { Component, EventEmitter, Input, Output } from '@angular/core';

/*
 * https://angular.io/guide/testing#component-class-testing
 */
@Component({
  selector: 'app--doc-05-04-03-01-02',
  templateUrl: './doc-05-04-03-01-02.component.html',
})
export class Doc0504030102Component {
  @Input()
  public myInput: string = '';

  @Output()
  public myOutput: EventEmitter<string> = new EventEmitter();

  public handleClick(): void {
    this.myOutput.emit(this.myInput.toUpperCase());
  }
}
