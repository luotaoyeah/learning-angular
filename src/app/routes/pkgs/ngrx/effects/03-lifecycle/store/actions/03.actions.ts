import { Action } from '@ngrx/store';

enum ActionTypeEnum {
  A = '[X03Component] A',
  Init = '[X03Component] Init',
}

class AAction implements Action {
  public readonly type: ActionTypeEnum.A = ActionTypeEnum.A;
}

class InitAction implements Action {
  public readonly type: ActionTypeEnum.Init = ActionTypeEnum.Init;
}

type ActionUnion = AAction | InitAction;

export { ActionTypeEnum, AAction, InitAction, ActionUnion };
