import { Directive, OnDestroy, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[mySpy]',
})
export class MySpyDirective implements OnInit, OnDestroy {
  constructor() {}

  public ngOnInit() {
    console.log(`[${MySpyDirective.name}]`, 'ngOnInit()');
  }

  public ngOnDestroy(): void {
    console.log(`[${MySpyDirective.name}]`, 'ngOnDestroy()');
  }
}
