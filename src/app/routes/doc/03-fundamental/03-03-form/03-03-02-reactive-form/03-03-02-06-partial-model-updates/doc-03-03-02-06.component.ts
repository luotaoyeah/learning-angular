import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-doc-03-03-02-06',
  templateUrl: './doc-03-03-02-06.component.html',
})
export class Doc03030206Component implements OnInit {
  profileFormGroup: FormGroup = new FormGroup({
    name: new FormControl('foo'),
    address: new FormGroup({
      street: new FormControl('bar'),
      zip: new FormControl('baz'),
    }),
  });

  constructor() {}

  ngOnInit() {}

  setValue() {
    /*
     * 可以调用 FormGroup.setValue() 方法更新数据，
     * 此时，参数对象的数据格式必须严格等于 FormGroup 对象的数据格式，
     * 如下，如果我只是想更新 address.street 属性，但是其他的属性（如：name）也必须提供
     */
    this.profileFormGroup.setValue({
      name: 'foo',
      address: {
        street: 'BAR',
        zip: 'baz',
      },
    });
  }

  /*
   * 可以调用 FormGroup.patchValue() 方法更新数据，
   * 此时，参数对象中只需要包含需要更新的属性，其他属性可以忽略，
   * 如下，只更新了 address.street 属性
   */
  patchValue() {
    this.profileFormGroup.patchValue({
      address: {
        street: 'BAR',
      },
    });
  }

  reset() {
    this.profileFormGroup = new FormGroup({
      name: new FormControl('foo'),
      address: new FormGroup({
        street: new FormControl('bar'),
        zip: new FormControl('baz'),
      }),
    });
  }
}
