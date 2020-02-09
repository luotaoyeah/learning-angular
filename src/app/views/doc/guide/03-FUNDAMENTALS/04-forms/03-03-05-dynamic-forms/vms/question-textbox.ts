import { QuestionBase } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-05-dynamic-forms/vms/question-base';

export class TextboxQuestion extends QuestionBase<string> {
  public controlType = 'textbox';
  public type: string;

  constructor(options: Partial<TextboxQuestion> = {}) {
    super(options);
    this.type = options.type || '';
  }
}
