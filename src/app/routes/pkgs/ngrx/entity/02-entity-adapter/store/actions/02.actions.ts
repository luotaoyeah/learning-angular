import { Action } from '@ngrx/store';
import { User } from '../state/User';

enum ActionTypeEnum {
  LOAD_USERS = '[User] LOAD_USERS',
  CLEAR_USERS = '[User] CLEAR_USERS',
}

class LoadUsersAction implements Action {
  public readonly type: ActionTypeEnum.LOAD_USERS = ActionTypeEnum.LOAD_USERS;

  constructor(public payload: Array<User>) {}
}

class ClearUsersAction implements Action {
  public readonly type: ActionTypeEnum.CLEAR_USERS = ActionTypeEnum.CLEAR_USERS;
}

type ActionUnion = LoadUsersAction | ClearUsersAction;

export { ActionTypeEnum, LoadUsersAction, ClearUsersAction, ActionUnion };
