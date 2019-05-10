import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-doc-05-07-04-06',
  templateUrl: './doc-05-07-04-06.component.html',
})
export class Doc05070406Component implements OnInit {
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
