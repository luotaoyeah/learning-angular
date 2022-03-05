import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app--doc-03-03-08-04-01',
  templateUrl: './doc-03-03-08-04.01.component.html',
  styleUrls: ['./doc-03-03-08-04.01.component.less'],
})
export class Doc0303080401Component {
  @Output()
  public close: EventEmitter<void> = new EventEmitter();

  public _message: string = '';

  get message(): string {
    return this._message;
  }

  @Input()
  set message(message: string) {
    this._message = message;
  }

  public handleClose() {
    this.close.emit();
  }
}
