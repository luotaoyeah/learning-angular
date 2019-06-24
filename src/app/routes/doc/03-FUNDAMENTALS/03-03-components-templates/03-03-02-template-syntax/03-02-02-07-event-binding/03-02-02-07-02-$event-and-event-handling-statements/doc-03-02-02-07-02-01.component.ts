import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-07-02-01',
  template:
    '<p-button label="$event" (onClick)="someChange.emit(true)"></p-button>',
})
export class Doc030202070201Component implements OnInit {
  @Output() public someChange: EventEmitter<boolean> = new EventEmitter();

  public ngOnInit() {}
}
