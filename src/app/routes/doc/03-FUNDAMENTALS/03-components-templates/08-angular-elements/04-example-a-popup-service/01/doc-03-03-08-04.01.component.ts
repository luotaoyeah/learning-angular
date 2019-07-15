import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-doc-03-03-08-04-01',
  template: `
    <span> {{ message | uppercase }}</span>
    <button (click)="closed.next()" nz-button>&#x2716;</button>
  `,
  styles: [
    `
      :host {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: #009cff;
        height: 48px;
        padding: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid black;
        font-size: 24px;
        z-index: 99999;
      }

      button {
        border-radius: 50%;
        border: none;
        cursor: pointer;
        font-size: 12px;
        width: 24px;
        height: 24px;
        padding: 0;
      }
    `,
  ],
})
export class Doc0303080401Component {
  public state: 'opened' | 'closed' = 'closed';

  @Input()
  set message(message: string) {
    this._message = message;
    this.state = 'opened';
  }

  get message(): string {
    return this._message;
  }

  public _message: string = '';

  @Output()
  public closed: EventEmitter<void> = new EventEmitter();
}
