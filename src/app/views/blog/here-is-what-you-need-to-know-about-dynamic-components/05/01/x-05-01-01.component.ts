import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app--x-05-01-01',
  template: '<button nz-button>FOO</button>',
})
export class X050101Component implements OnInit, OnDestroy {
  public ngOnInit(): void {
    console.log(`[${X050101Component.name}]\nngOnInit()`);
  }

  public ngOnDestroy(): void {
    console.log(`[${X050101Component.name}]\nngOnDestroy()`);
  }
}
