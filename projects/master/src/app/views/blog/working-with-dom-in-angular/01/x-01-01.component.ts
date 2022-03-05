import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app--x-01-01',
  template: '<p>{{foo}}</p>',
})
export class X0101Component implements DoCheck {
  public foo: string = 'FOO';

  public ngDoCheck(): void {
    console.log(`[${X0101Component.name}]\nngDoCheck`);
  }
}
