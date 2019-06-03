import { ActionTypeEnum, ActionUnion } from '../actions/01.actions';
import { IState } from '../state/i-state';

const initialState: IState = {
  count: 0,
};

function x01Reducer(state: IState = initialState, action: ActionUnion): IState {
  switch (action.type) {
    case ActionTypeEnum.Increment:
      return {
        ...state,
        count: state.count + 1,
      };
    case ActionTypeEnum.Decrement:
      return {
        ...state,
        count: state.count - 1,
      };
    case ActionTypeEnum.Reset:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
}

export { initialState, x01Reducer };
