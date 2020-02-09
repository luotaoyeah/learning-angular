import { IState } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-04/store/state/i-state';
import { ActionTypeEnum, ActionUnion } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-04/store/actions/02-03-04.actions';

const initialState: IState = {};

function x020304Reducer(state: IState = initialState, action: ActionUnion) {
  switch (action.type) {
    case ActionTypeEnum.Foo:
      return state;
    default:
      return state;
  }
}

export { x020304Reducer };
