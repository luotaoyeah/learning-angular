import { Action } from '@ngrx/store';

enum ActionTypeEnum {
  A = '[X0401Component] A',
}

class AAction implements Action {
  public readonly type: string = ActionTypeEnum.A;
}

type ActionUnion = AAction;

export { ActionTypeEnum, AAction, ActionUnion };
