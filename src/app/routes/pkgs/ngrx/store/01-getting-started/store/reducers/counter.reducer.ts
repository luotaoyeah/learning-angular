import { ActionTypeEnum } from '../actions/counter.actions';
import { Action } from '@ngrx/store';

const initialState: number = 0;

function counterReducer(state: number = initialState, action: Action): number {
  switch (action.type) {
    case ActionTypeEnum.Increment:
      return state + 1;
    case ActionTypeEnum.Decrement:
      return state - 1;
    case ActionTypeEnum.Reset:
      return 0;
    default:
      return state;
  }
}

export { initialState, counterReducer };
