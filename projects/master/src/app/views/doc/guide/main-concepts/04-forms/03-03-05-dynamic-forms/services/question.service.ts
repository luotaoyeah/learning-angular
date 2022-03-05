import { Injectable } from '@angular/core';
import { SafeAny } from '@src/typings';
import { DropdownQuestion } from '@app/views/doc/guide/main-concepts/04-forms/03-03-05-dynamic-forms/vms/question-dropdown';
import { QuestionBase } from '@app/views/doc/guide/main-concepts/04-forms/03-03-05-dynamic-forms/vms/question-base';
import { TextboxQuestion } from '@app/views/doc/guide/main-concepts/04-forms/03-03-05-dynamic-forms/vms/question-textbox';

@Injectable()
export class QuestionService {
  public getQuestions(): Array<QuestionBase<SafeAny>> {
    const questions: Array<QuestionBase<SafeAny>> = [
      new DropdownQuestion({
        key: 'brave',
        label: 'BRAVERY RATING',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
        order: 3,
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'FIRST NAME',
        value: 'Bombasto',
        required: true,
        order: 1,
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'EMAIL',
        type: 'email',
        order: 2,
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
