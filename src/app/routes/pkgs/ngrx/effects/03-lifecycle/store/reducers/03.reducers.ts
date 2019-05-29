import { IState } from '../state/IState';
import { ActionTypeEnum, ActionUnion } from '../actions/03.actions';

function x03Reducer(state: IState = { x: Math.random() }, action: ActionUnion) {
  switch (action.type) {
    case ActionTypeEnum.A:
      return { ...state, x: Math.random() };
    default:
      return state;
  }
}

export { x03Reducer };
