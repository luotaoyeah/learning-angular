import { Component } from '@angular/core';

/*
 * https://angular.io/guide/structural-directives#inside-ngfor
 */
@Component({
  selector: 'app-doc-03-03-10-04',
  templateUrl: './doc-03-03-10-04.component.html',
  styles: ['.odd{ color: #ff0000; }'],
})
export class Doc03031004Component {
  public heroes: Array<{ id: number; name: string }> = [
    { id: 1, name: 'FOO' },
    { id: 2, name: 'BAR' },
    { id: 3, name: 'BAZ' },
  ];

  public trackById(hero: { id: number; name: string }): number {
    return hero.id;
  }
}
