import { Action } from '@ngrx/store';

enum ActionTypeEnum {
  A = '[X03Component] A',
}

class AAction implements Action {
  public readonly type: ActionTypeEnum.A = ActionTypeEnum.A;
}

type ActionUnion = AAction;

export { ActionTypeEnum, AAction, ActionUnion };
