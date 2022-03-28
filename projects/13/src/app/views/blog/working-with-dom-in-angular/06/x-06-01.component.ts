import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app--x-06-01',
  template: '<p>FOO</p>',
})
export class X0601Component implements OnInit {
  public ngOnInit(): void {
    console.log(`[${X0601Component.name}]\nngOnInit()`);
  }
}
