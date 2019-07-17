export class QuestionBase<T> {
  public value: T;
  public key: string;
  public label: string;
  public required: boolean;
  public order: number;
  public controlType: string;

  constructor(options: Partial<QuestionBase<T>> = {}) {
    this.value = options.value || (('' as unknown) as T);
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
  }
}
