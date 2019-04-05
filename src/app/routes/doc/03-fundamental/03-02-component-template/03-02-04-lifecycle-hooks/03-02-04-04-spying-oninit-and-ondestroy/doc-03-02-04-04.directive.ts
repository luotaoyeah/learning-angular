import { Directive, OnDestroy, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[mySpy]',
})
export class MySpyDirective implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    console.log(`[${MySpyDirective.name}]`, 'ngOnInit()');
  }

  ngOnDestroy(): void {
    console.log(`[${MySpyDirective.name}]`, 'ngOnDestroy()');
  }
}
