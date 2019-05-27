import { TypedAction } from '@ngrx/store/src/models';

/*
 * 定义 counter 的所有 actions,
 * 每一个 action 都是一个实现了 TypedAction 的 class
 */

enum ActionTypeEnum {
  Increment = '[Counter Component] Increment',
  Decrement = '[Counter Component] Decrement',
  Reset = '[Counter Component] Reset',
}

class IncrementAction implements TypedAction<ActionTypeEnum> {
  public readonly type: ActionTypeEnum = ActionTypeEnum.Increment;
}

class DecrementAction implements TypedAction<ActionTypeEnum> {
  public readonly type: ActionTypeEnum = ActionTypeEnum.Decrement;
}

class ResetAction implements TypedAction<ActionTypeEnum> {
  public readonly type: ActionTypeEnum = ActionTypeEnum.Reset;
}

export { ActionTypeEnum, IncrementAction, DecrementAction, ResetAction };
