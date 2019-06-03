import { IState } from '../state/i-state';
import { ActionTypeEnum, ActionUnion } from '../actions/02-02.actions';

const initialState: IState = {
  count: 0,
  date: new Date(),
};

function x0202Reducer(
  state: IState = initialState,
  action: ActionUnion,
): IState {
  switch (action.type) {
    case ActionTypeEnum.Increment:
      return {
        ...state,
        count: state.count + 1,
        date: action.date,
      };
    case ActionTypeEnum.Decrement:
      return {
        ...state,
        count: state.count - 1,
        date: action.date,
      };
    case ActionTypeEnum.Reset:
      return {
        ...state,
        count: 0,
        date: action.date,
      };
    default:
      return state;
  }
}

export { initialState, x0202Reducer };
