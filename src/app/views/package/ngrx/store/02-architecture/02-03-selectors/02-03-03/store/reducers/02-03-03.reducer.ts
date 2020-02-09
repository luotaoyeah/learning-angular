import { IState } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-03/store/state/i-state';
import { ActionTypeEnum, ActionUnion } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-03/store/actions/02-03-03.actions';

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
