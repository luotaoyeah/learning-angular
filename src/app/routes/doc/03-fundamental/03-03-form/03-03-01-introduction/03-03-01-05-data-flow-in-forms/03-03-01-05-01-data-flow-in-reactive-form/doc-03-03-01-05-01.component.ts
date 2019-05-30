import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-doc-03-03-01-05-01',
  templateUrl: './doc-03-03-01-05-01.component.html',
})
export class Doc0303010501Component implements OnInit {
  @ViewChild('colorInputEl') public colorInputEl!: ElementRef<HTMLInputElement>;

  public colorFormControl: FormControl = new FormControl('red');

  public ngOnInit() {}

  public getValue() {
    console.assert(
      this.colorFormControl.value === this.colorInputEl.nativeElement.value,
    );
  }

  public setValue() {
    this.colorFormControl.valueChanges.subscribe((value: string) => {
      console.log(value);
    });
    this.colorFormControl.setValue('YELLOW');
  }
}
