import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
} from '@angular/core';

@Component({
  selector: 'app--x-03-c',
  template: '',
})
export class X03CComponent
  implements
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  public ngAfterContentInit(): void {
    console.log('%c\t\tC: ngAfterContentInit()', 'color:green');
  }

  public ngAfterContentChecked(): void {
    console.log('%c\t\tC: ngAfterContentChecked()', 'color:green');
  }

  public ngAfterViewInit(): void {
    console.log('%c\t\tC: ngAfterViewInit()', 'color:green');
  }

  public ngAfterViewChecked(): void {
    console.log('%c\t\tC: ngAfterViewChecked()', 'color:green');
  }
}
