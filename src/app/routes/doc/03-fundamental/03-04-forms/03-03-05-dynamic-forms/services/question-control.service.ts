import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '../vms/question-base';

@Injectable()
export class QuestionControlService {
  // tslint:disable-next-line:no-any
  public toFormGroup(questions: QuestionBase<any>[]): FormGroup {
    // tslint:disable-next-line:no-any
    const formGroup: FormGroup = new FormGroup({});

    questions.forEach(question => {
      formGroup.addControl(
        question.key,
        question.required
          ? new FormControl(question.value || '', {
              validators: [Validators.required],
            })
          : new FormControl(question.value || ''),
      );
    });

    return formGroup;
  }
}
