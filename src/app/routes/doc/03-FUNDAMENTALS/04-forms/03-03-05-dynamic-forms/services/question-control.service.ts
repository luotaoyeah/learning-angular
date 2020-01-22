import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '@app/routes/doc/03-FUNDAMENTALS/04-forms/03-03-05-dynamic-forms/vms/question-base';

@Injectable()
export class QuestionControlService {
  public toFormGroup(questions: Array<QuestionBase<any>>): FormGroup {
    const formGroup: FormGroup = new FormGroup({});

    questions.forEach((question) => {
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
