import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-08-01',
  template: '<p-button label="app-doc-03-02-08-01" type="info"></p-button>',
})
export class Doc03020801Component implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    console.log(`[${Doc03020801Component.name}][ngOnInit()]`);
  }

  ngOnDestroy(): void {
    console.log(`[${Doc03020801Component.name}][ngOnDestroy()]`);
  }
}
