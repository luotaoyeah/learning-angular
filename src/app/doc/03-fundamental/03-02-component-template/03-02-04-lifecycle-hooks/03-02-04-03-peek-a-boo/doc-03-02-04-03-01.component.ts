import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-04-03-01',
  template: '<p-button label="app-doc-03-02-04-03-01"></p-button>'
})
export class Doc0302040301Component implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    console.log(`[${Doc0302040301Component.name}]`, 'ngOnInit()');
  }

  ngOnDestroy(): void {
    console.log(`[${Doc0302040301Component.name}]`, 'ngOnDestroy()');
  }
}
