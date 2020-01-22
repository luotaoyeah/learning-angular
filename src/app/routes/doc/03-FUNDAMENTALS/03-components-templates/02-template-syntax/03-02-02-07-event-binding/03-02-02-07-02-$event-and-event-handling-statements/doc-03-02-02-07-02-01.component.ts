import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app--doc-03-02-02-07-02-01',
  template: '<button (click)="someChange.emit(true)">$event</button>',
})
export class Doc030202070201Component implements OnInit {
  @Output() public someChange: EventEmitter<boolean> = new EventEmitter();

  public ngOnInit() {}
}
