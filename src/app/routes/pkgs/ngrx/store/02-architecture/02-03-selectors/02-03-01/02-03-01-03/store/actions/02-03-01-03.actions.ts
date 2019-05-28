import { Action } from '@ngrx/store';

enum ActionTypeEnum {
  SetCounter = '[X02030103Component] SetCounter',
  ResetCounter = '[X02030103Component] ResetCounter',
}

class SetCounterAction implements Action {
  public readonly type: string = ActionTypeEnum.SetCounter;
}

class ResetCounterAction implements Action {
  public readonly type: string = ActionTypeEnum.ResetCounter;
}

type ActionUnion = SetCounterAction | ResetCounterAction;

export { ActionTypeEnum, SetCounterAction, ResetCounterAction, ActionUnion };
