import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

/*
 * https://angular.io/guide/reactive-forms#dynamic-controls-using-form-arrays
 */
@Component({
  selector: 'app-doc-03-03-02-09',
  templateUrl: './doc-03-03-02-09.component.html',
})
export class Doc03030209Component {
  /*
   * FormArray 表示一个 FormControl 数组,
   * 可以通过 FormArray.push() 方法动态添加 FormControl
   */
  public profileFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
    }),
    aliases: new FormArray([
      new FormControl('a', {
        validators: Validators.required,
      }),
    ]),
  });

  get aliases(): FormArray {
    return this.profileFormGroup.get('aliases') as FormArray;
  }

  /**
   * Add a new FormControl into the FormArray
   */
  public addAlias() {
    this.aliases.push(
      new FormControl('', {
        validators: Validators.required,
      }),
    );
  }

  /**
   * Remove an alias
   * @param index The index
   */
  public removeAlias(index: number) {
    this.aliases.removeAt(index);
  }

  public handleSubmit() {
    if (this.profileFormGroup.invalid) {
      return;
    }

    console.log(
      `[${Doc03030209Component.name}]\n`,
      this.profileFormGroup.value,
    );
  }
}
