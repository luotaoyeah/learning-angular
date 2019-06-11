import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../vms/question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
})
export class DynamicFormQuestionComponent {
  @Input()
  // tslint:disable-next-line:no-any
  public question: QuestionBase<any> = new QuestionBase();
  @Input()
  public formGroup: FormGroup = new FormGroup({});

  get isValid() {
    return this.formGroup.controls[this.question.key].valid;
  }
}
