import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app--x-07-01',
  template: '<p>FOO</p>',
})
export class X0701Component implements OnInit {
  public ngOnInit(): void {
    console.log(`[${X0701Component.name}]\nngOnInit()`);
  }
}
