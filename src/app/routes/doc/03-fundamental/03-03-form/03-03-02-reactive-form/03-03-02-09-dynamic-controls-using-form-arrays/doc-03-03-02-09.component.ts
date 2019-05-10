import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doc-03-03-02-09',
  templateUrl: './doc-03-03-02-09.component.html',
})
export class Doc03030209Component implements OnInit {
  /*
   * FormArray 表示一组没有名字的 FormControl，
   * 可以通过 FormArray.push() 方法动态添加 FormControl
   */
  public profileFormGroup: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });

  get aliases(): FormArray {
    return this.profileFormGroup.get('aliases') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit() {}

  /**
   * 往 FormArray 中添加一个新的 FormControl
   */
  public addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }
}
