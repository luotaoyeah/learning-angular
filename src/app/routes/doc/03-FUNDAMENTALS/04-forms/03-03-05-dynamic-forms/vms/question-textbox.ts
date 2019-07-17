import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  public controlType = 'textbox';
  public type: string;

  constructor(options: Partial<TextboxQuestion> = {}) {
    super(options);
    this.type = options.type || '';
  }
}
