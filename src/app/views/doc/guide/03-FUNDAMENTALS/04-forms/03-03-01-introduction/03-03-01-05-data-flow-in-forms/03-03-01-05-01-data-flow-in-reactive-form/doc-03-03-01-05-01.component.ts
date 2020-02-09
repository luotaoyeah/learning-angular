import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

/*
 * https://angular.io/guide/forms-overview#data-flow-in-reactive-forms
 */
@Component({
  selector: 'app--doc-03-03-01-05-01',
  templateUrl: './doc-03-03-01-05-01.component.html',
})
export class Doc0303010501Component implements OnInit {
  @ViewChild('colorInputEl', { static: true })
  public colorInputEl!: ElementRef<HTMLInputElement>;

  public colorFormControl: FormControl = new FormControl('red');

  public ngOnInit(): void {
    this.colorFormControl.valueChanges.subscribe((value: string) => {
      console.log(`[${Doc0303010501Component.name}]\n`, '[valueChanges]', value);
    });
  }

  public getValue() {
    console.assert(this.colorFormControl.value === this.colorInputEl.nativeElement.value);
  }

  public setValue() {
    this.colorFormControl.setValue('YELLOW', {
      onlySelf: false,
      emitEvent: true,
      emitModelToViewChange: true,
      emitViewToModelChange: true,
    });
  }
}
