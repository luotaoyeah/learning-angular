import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UniqueValidator } from './validator/unique-validator';

@Component({
  selector: 'app-doc-03-03-04-05',
  templateUrl: './doc-03-03-04-05.component.html',
})
export class Doc03030405Component implements OnInit {
  formGroup: FormGroup = new FormGroup({
    name: new FormControl('', {
      /*
       * 考虑到 async validator function 的性能影响，
       * 对于比较耗费时间的 async validator，可以将验证策略设置为 blur，
       * 即当表单失去焦点时，才进行验证，
       * 默认是在每次 change 的时候都会进行验证
       */
      updateOn: 'blur',
      asyncValidators: [this.uniqueValidator.validate],
    }),
  });

  constructor(private uniqueValidator: UniqueValidator) {}

  ngOnInit() {}
}
