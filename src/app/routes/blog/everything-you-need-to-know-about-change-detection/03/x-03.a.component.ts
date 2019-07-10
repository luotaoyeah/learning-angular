import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-x-03-a',
  template: '<app-x-03-b></app-x-03-b>',
})
export class X03AComponent
  implements
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  public ngAfterContentInit(): void {
    console.log('%cA: ngAfterContentInit()', 'color:red');
  }

  public ngAfterContentChecked(): void {
    console.log('%cA: ngAfterContentChecked()', 'color:red');
  }

  public ngAfterViewInit(): void {
    console.log('%cA: ngAfterViewInit()', 'color:red');
  }

  public ngAfterViewChecked(): void {
    console.log('%cA: ngAfterViewChecked()', 'color:red');
  }
}
