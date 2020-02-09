import { Action } from '@ngrx/store';

enum ActionTypeEnum {
  ClearSelectedUser = '[X02030102Component] ClearSelectedUser',
  SetSelectedUser = '[X02030102Component] SetSelectedUser',
  ResetSelectedUser = '[X02030102Component] ResetSelectedUser',
}

class ClearSelectedUserAction implements Action {
  public readonly type: string = ActionTypeEnum.ClearSelectedUser;
}

class SetSelectedUserAction implements Action {
  public readonly type: string = ActionTypeEnum.SetSelectedUser;
}

class ResetSelectedUserAction implements Action {
  public readonly type: string = ActionTypeEnum.ResetSelectedUser;
}

type ActionUnion =
  | ClearSelectedUserAction
  | SetSelectedUserAction
  | ResetSelectedUserAction;

export {
  ActionTypeEnum,
  ClearSelectedUserAction,
  SetSelectedUserAction,
  ResetSelectedUserAction,
  ActionUnion,
};
