import { ActionTypeEnum, ActionUnion } from '@app/views/package/ngrx/store/01-getting-started/store/actions/01.actions';
import { IState } from '@app/views/package/ngrx/store/01-getting-started/store/state/i-state';

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
