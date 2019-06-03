import { IState } from '../state/istate';
import { ActionTypeEnum, ActionUnion } from '../actions/02-03-04.actions';

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
