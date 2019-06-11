import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-10-01-01',
  template: '<p-button label="FOO"></p-button>',
})
export class Doc030202100101Component implements OnInit, OnDestroy {
  public ngOnInit() {
    console.log(`%c${Doc030202100101Component.name} CREATED`, 'color:green');
  }

  public ngOnDestroy(): void {
    console.log(`%c${Doc030202100101Component.name} DESTROYED`, 'color:red');
  }
}
