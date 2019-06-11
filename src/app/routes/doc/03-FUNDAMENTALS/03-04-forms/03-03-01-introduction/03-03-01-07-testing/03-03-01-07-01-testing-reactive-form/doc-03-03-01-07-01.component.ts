import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

/*
 * https://angular.io/guide/forms-overview#testing-reactive-forms
 */
@Component({
  selector: 'app-doc-03-03-01-07-01',
  templateUrl: './doc-03-03-01-07-01.component.html',
})
export class Doc0303010701Component {
  public colorFormControl: FormControl = new FormControl('RED');
}
