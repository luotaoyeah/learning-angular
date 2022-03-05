import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SafeAny } from '@src/typings';
import { QuestionBase } from '@app/views/doc/guide/main-concepts/04-forms/03-03-05-dynamic-forms/vms/question-base';

@Component({
  selector: 'app--question',
  templateUrl: './dynamic-form-question.component.html',
})
export class DynamicFormQuestionComponent {
  @Input()
  public question: QuestionBase<SafeAny> = new QuestionBase();
  @Input()
  public formGroup: FormGroup = new FormGroup({});

  get isValid() {
    return this.formGroup.controls[this.question.key].valid;
  }
}
