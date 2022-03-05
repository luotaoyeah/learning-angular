import { Component } from '@angular/core';
import { cloneDeep } from 'lodash-es';

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

  public items02: Array<{ id: string; value: string }> = [
    { id: '1', value: 'a' },
    { id: '2', value: 'b' },
    { id: '3', value: 'c' },
  ];

  public reverse() {
    this.items02 = cloneDeep(this.items02.reverse());
  }

  public trackByID(index: number, value: { id: string; value: string }) {
    return value.id;
  }
}
