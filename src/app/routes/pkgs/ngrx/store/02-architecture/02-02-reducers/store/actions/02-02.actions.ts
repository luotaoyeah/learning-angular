import { Action } from '@ngrx/store';

enum ActionTypeEnum {
  Increment = '[X0202Component] Increment',
  Decrement = '[X0202Component] Decrement',
  Reset = '[X0202Component] Reset',
}

class IncrementAction implements Action {
  public readonly type: ActionTypeEnum.Increment = ActionTypeEnum.Increment;

  constructor(public date: Date) {}
}

class DecrementAction implements Action {
  public readonly type: ActionTypeEnum.Decrement = ActionTypeEnum.Decrement;

  constructor(public date: Date) {}
}

class ResetAction implements Action {
  public readonly type: ActionTypeEnum.Reset = ActionTypeEnum.Reset;

  constructor(public date: Date) {}
}

type ActionUnion = IncrementAction | DecrementAction | ResetAction;

export {
  ActionTypeEnum,
  ActionUnion,
  IncrementAction,
  DecrementAction,
  ResetAction,
};
