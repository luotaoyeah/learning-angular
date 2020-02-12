import { Component } from '@angular/core';

// https://angular.io/guide/built-in-directives#ngif
@Component({
  selector: 'app--ngif',
  templateUrl: './ngif.component.html',
})
export class NgifComponent {
  public visible = true;
}
