import { Action } from '@ngrx/store';

enum ActionTypeEnum {
  A = '[X03Component] A',
  Init = '[X03Component] Init',
  Identity = '[X03Component] Identity',
}

class AAction implements Action {
  public readonly type: ActionTypeEnum.A = ActionTypeEnum.A;
}

class InitAction implements Action {
  public readonly type: ActionTypeEnum.Init = ActionTypeEnum.Init;
}

class IdentityAction implements Action {
  public readonly type: ActionTypeEnum.Identity = ActionTypeEnum.Identity;
}

type ActionUnion = AAction | InitAction | IdentityAction;

export { ActionTypeEnum, AAction, InitAction, IdentityAction, ActionUnion };
