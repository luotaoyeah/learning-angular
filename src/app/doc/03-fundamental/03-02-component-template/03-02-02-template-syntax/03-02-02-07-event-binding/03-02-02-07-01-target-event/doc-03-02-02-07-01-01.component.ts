import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-07-01-01',
  template: '<p-button label="CUSTOM COMPONENT EVENT" (onClick)="handleClick()"></p-button>'
})
export class Doc030202070101Component implements OnInit {
  @Output() customClick: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleClick() {
    setTimeout(() => {
      this.customClick.emit('FOO');
    }, 1000);
  }
}
