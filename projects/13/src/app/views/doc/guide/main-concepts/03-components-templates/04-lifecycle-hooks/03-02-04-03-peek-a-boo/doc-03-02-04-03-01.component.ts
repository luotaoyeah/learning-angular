import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app--doc-03-02-04-03-01',
  template: '<button nz-button>app-doc-03-02-04-03-01</button>',
})
export class Doc0302040301Component implements OnInit, OnDestroy {
  public ngOnInit() {
    console.log(`[${Doc0302040301Component.name}]\n`, 'ngOnInit()');
  }

  public ngOnDestroy(): void {
    console.log(`[${Doc0302040301Component.name}]\n`, 'ngOnDestroy()');
  }
}
