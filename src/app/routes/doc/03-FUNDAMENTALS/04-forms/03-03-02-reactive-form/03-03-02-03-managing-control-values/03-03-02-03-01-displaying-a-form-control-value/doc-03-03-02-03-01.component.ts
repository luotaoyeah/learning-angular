import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

/*
 * https://angular.io/guide/reactive-forms#displaying-a-form-control-value
 */
@Component({
  selector: 'app-doc-03-03-02-03-01',
  templateUrl: './doc-03-03-02-03-01.component.html',
})
export class Doc0303020301Component implements OnInit {
  public nameFormControl: FormControl = new FormControl('FOO');

  public ngOnInit() {
    this.nameFormControl.valueChanges.subscribe((value: string) => {
      console.log(`[${Doc0303020301Component.name}]\n`, '[FormControl.valueChanges()]', value);
    });
  }
}
