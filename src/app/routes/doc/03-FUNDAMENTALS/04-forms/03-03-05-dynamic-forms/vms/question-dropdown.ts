import { QuestionBase } from '@app/routes/doc/03-FUNDAMENTALS/04-forms/03-03-05-dynamic-forms/vms/question-base';

export class DropdownQuestion extends QuestionBase<string> {
  public controlType = 'dropdown';
  public options: Array<{ key: string; value: string }> = [];

  constructor(options: Partial<DropdownQuestion> = {}) {
    super(options);
    this.options = options.options || [];
  }
}
