import { Action, ActionReducer } from '@ngrx/store';
import { ActionTypeEnum } from '../actions/counter.actions';

const initialState: number = 0;

const counterReducer: ActionReducer<number, Action> = (
  state: number = initialState,
  action: Action,
): number => {
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
};

export { initialState, counterReducer };
