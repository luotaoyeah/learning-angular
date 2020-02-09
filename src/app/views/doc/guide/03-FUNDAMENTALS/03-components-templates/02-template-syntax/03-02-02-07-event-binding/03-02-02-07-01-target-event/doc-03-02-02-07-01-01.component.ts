import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app--doc-03-02-02-07-01-01',
  template: '<button  (click)="handleClick()">CUSTOM COMPONENT EVENT</button>',
})
export class Doc030202070101Component implements OnInit {
  @Output() public ntClick: EventEmitter<string> = new EventEmitter();

  public ngOnInit() {}

  public handleClick() {
    setTimeout(() => {
      this.ntClick.emit('FOO');
    }, 1000);
  }
}
