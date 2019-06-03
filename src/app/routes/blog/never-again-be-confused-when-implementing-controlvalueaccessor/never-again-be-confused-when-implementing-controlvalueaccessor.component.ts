import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

/*
 * https://blog.angularindepth.com/never-again-be-confused-when-implementing-controlvalueaccessor-in-angular-forms-93b9eee9ee83
 */
@Component({
  selector:
    'app-never-again-be-confused-when-implementing-controlvalueaccessor',
  templateUrl:
    './never-again-be-confused-when-implementing-controlvalueaccessor.component.html',
})
export class NeverAgainBeConfusedWhenImplementingControlvalueaccessorComponent {
  public sliderControl: FormControl = new FormControl(50);

  public handleSliderValueChange(value: number): void {
    this.sliderControl.setValue(value, {
      emitModelToViewChange: true,
    });
  }
}
