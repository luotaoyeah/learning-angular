import { IState } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-02/store/state/i-state';
import { ActionTypeEnum, ActionUnion } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-02/store/actions/02-03-02.actions';

const initialState: IState = {
  count: 1,
};

function x020302Reducer(state: IState = initialState, action: ActionUnion) {
  switch (action.type) {
    case ActionTypeEnum.Foo:
      return state;
    default:
      return state;
  }
}

export { x020302Reducer };
