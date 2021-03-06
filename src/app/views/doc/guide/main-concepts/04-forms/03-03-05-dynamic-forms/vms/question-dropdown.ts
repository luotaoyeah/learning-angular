import { QuestionBase } from '@app/views/doc/guide/main-concepts/04-forms/03-03-05-dynamic-forms/vms/question-base';

export class DropdownQuestion extends QuestionBase<string> {
  public controlType = 'dropdown';
  public options: Array<{ key: string; value: string }> = [];

  constructor(options: Partial<DropdownQuestion> = {}) {
    super(options);
    this.options = options.options || [];
  }
}
