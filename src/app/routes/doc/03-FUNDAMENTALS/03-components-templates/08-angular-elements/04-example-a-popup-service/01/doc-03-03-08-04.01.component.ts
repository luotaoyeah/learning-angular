import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-doc-03-03-08-04-01',
  templateUrl: './doc-03-03-08-04.01.component.html',
  styleUrls: ['./doc-03-03-08-04.01.component.less'],
})
export class Doc0303080401Component {
  //region Input

  @Input()
  set message(message: string) {
    this._message = message;
  }

  get message(): string {
    return this._message;
  }

  //endregion

  public _message: string = '';

  //region Output

  @Output()
  public close: EventEmitter<void> = new EventEmitter();

  //endregion

  //region Method

  public handleClose() {
    this.close.emit();
  }

  //endregion
}
