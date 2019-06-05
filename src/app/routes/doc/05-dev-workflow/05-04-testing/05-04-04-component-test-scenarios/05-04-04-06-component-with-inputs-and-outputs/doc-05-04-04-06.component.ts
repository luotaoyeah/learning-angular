import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-doc-05-04-04-06',
  templateUrl: './doc-05-04-04-06.component.html',
})
export class Doc05040406Component implements OnInit {
  @Input()
  public foo: string = '';

  @Output()
  public ntClick: EventEmitter<number> = new EventEmitter();

  public ngOnInit() {}

  public handleClick() {
    this.ntClick.emit(99);
  }
}
