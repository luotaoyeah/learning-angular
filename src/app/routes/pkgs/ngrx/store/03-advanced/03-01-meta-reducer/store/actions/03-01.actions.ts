import { Action } from '@ngrx/store';

enum ActionTypeEnum {
  A = '[X0301Component] A',
  B = '[X0301Component] B',
  C = '[X0301Component] C',
}

class AAction implements Action {
  public readonly type: string = ActionTypeEnum.A;
}

class BAction implements Action {
  public readonly type: string = ActionTypeEnum.B;
}

class CAction implements Action {
  public readonly type: string = ActionTypeEnum.C;
}

type ActionUnion = AAction | BAction | CAction;

export { ActionTypeEnum, AAction, BAction, CAction, ActionUnion };
