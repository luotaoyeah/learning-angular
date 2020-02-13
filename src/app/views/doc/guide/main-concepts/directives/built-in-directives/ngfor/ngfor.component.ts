import { Component } from '@angular/core';

// https://angular.io/guide/built-in-directives#ngfor
@Component({
  selector: 'app--ngfor',
  templateUrl: './ngfor.component.html',
})
export class NgforComponent {
  public items: Array<{ id: string; value: string }> = [
    { id: '1', value: 'a' },
    { id: '2', value: 'b' },
    { id: '3', value: 'c' },
  ];
}
