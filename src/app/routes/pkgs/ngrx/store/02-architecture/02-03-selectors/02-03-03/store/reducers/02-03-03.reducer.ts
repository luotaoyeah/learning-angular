import { IState } from '../state/i-state';
import { ActionTypeEnum, ActionUnion } from '../actions/02-03-03.actions';

const initialState: IState = {
  count01: 1,
  count02: 2,
};

function x020303Reducer(state: IState = initialState, action: ActionUnion) {
  switch (action.type) {
    case ActionTypeEnum.Foo:
      return state;
    default:
      return state;
  }
}

export { x020303Reducer };