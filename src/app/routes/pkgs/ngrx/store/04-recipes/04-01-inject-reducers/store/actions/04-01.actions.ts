import { Action } from '@ngrx/store';

enum ActionTypeEnum {
  A = '[X0401Component] A',
  B = '[X0401Component] B',
}

class AAction implements Action {
  public readonly type: string = ActionTypeEnum.A;
}

class BAction implements Action {
  public readonly type: string = ActionTypeEnum.B;
}

type ActionUnion = AAction | BAction;

export { ActionTypeEnum, AAction, BAction, ActionUnion };
