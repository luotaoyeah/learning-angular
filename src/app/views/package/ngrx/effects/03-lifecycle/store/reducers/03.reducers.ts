import { IState } from '@app/views/package/ngrx/effects/03-lifecycle/store/state/i-state';
import { ActionTypeEnum, ActionUnion } from '@app/views/package/ngrx/effects/03-lifecycle/store/actions/03.actions';

function x03Reducer(state: IState = { x: Math.random() }, action: ActionUnion) {
  switch (action.type) {
    case ActionTypeEnum.A:
      return { ...state, x: Math.random() };
    default:
      return state;
  }
}

export { x03Reducer };
