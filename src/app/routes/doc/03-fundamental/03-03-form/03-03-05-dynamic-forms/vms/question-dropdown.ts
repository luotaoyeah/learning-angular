import { QuestionBase } from './question-base';

export class DropdownQuestion extends QuestionBase<string> {
  public controlType = 'dropdown';
  public options: { key: string; value: string }[] = [];

  constructor(options: Partial<DropdownQuestion> = {}) {
    super(options);
    this.options = options.options || [];
  }
}
