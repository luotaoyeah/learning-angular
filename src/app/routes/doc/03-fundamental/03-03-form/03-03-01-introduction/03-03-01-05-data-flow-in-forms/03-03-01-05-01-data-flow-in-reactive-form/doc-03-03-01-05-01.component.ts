import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-doc-03-03-01-05-01',
  templateUrl: './doc-03-03-01-05-01.component.html',
})
export class Doc0303010501Component implements OnInit {
  @ViewChild('colorInputEl') colorInputEl!: ElementRef<HTMLInputElement>;

  colorFormControl: FormControl = new FormControl('red');

  constructor() {}

  ngOnInit() {}

  getValue() {
    console.assert(
      this.colorFormControl.value === this.colorInputEl.nativeElement.value,
    );
  }

  setValue() {
    this.colorFormControl.valueChanges.subscribe((value: string) => {
      console.log(value);
    });
    this.colorFormControl.setValue('YELLOW');
  }
}
