import { createEntityAdapter } from '@ngrx/entity';
import { User } from '@app/views/package/ngrx/entity/02-entity-adapter/store/state/user';
import { IState } from '@app/views/package/ngrx/entity/02-entity-adapter/store/state/i-state';
import { ActionTypeEnum, ActionUnion } from '@app/views/package/ngrx/entity/02-entity-adapter/store/actions/02.actions';

const userEntityAdapter = createEntityAdapter<User>();

const initialState: IState = userEntityAdapter.getInitialState({
  selectedUserId: null,
});

function x02Reducer(state: IState = initialState, action: ActionUnion) {
  switch (action.type) {
    case ActionTypeEnum.LOAD_USERS:
      return userEntityAdapter.addAll(action.payload, state);
    case ActionTypeEnum.CLEAR_USERS:
      return userEntityAdapter.removeAll(state);
    default:
      return state;
  }
}

export { userEntityAdapter, x02Reducer };
