import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { uniqueValidator } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-04-form-validation/03-03-04-05-async-validation/validators/unique.validator';

/*
 * https://angular.io/guide/form-validation#async-validation
 */
@Component({
  selector: 'app--doc-03-03-04-05',
  templateUrl: './doc-03-03-04-05.component.html',
  styleUrls: ['./doc-03-03-04-05.component.less'],
})
export class Doc03030405Component {
  public formGroup: FormGroup = new FormGroup({
    name: new FormControl('', {
      /*
       * updateOn 默认为 change, 表示只要数据发生变更就会进行验证,
       * 为了提升性能, 对于比较耗时的异步验证, 可以将 updateOn 设置为 blur, 即当表单失去焦点时, 才进行验证
       */
      updateOn: 'blur',
      /*
       * 由于性能原因, 只有当所有的同步验证都验证通过之后, 才会进行异步验证
       */
      validators: [Validators.required],
      asyncValidators: [uniqueValidator()],
    }),
  });

  get nameControl(): FormControl {
    return this.formGroup.get('name') as FormControl;
  }
}
