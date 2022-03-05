import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app--x-03-b',
  template: '<app--x-03-c></app--x-03-c>',
})
export class X03BComponent implements AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  public ngAfterContentInit(): void {
    console.log('%c\tB: ngAfterContentInit()', 'color:blue');
  }

  public ngAfterContentChecked(): void {
    console.log('%c\tB: ngAfterContentChecked()', 'color:blue');
  }

  public ngAfterViewInit(): void {
    console.log('%c\tB: ngAfterViewInit()', 'color:blue');
  }

  public ngAfterViewChecked(): void {
    console.log('%c\tB: ngAfterViewChecked()', 'color:blue');
  }
}
