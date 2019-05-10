import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-doc-05-07-04-07',
  templateUrl: './doc-05-07-04-07.component.html',
})
export class Doc05070407Component implements OnInit {
  @Input()
  public foo: string = '';

  @Output()
  public ntClick: EventEmitter<number> = new EventEmitter();

  constructor() {}

  public ngOnInit() {}

  public handleClick() {
    this.ntClick.emit(99);
  }
}
