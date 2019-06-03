import { Component } from '@angular/core';

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
  public sliderValue: number = 50;

  public handleSliderValueChange(value: number): void {
    this.sliderValue = value;
  }
}
