import { IAppState } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-01/02-03-01-01/store/state/i-app-state';
import { ActionTypeEnum, ActionUnion } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-01/02-03-01-01/store/actions/02-03-01-01.actions';

const initialState: IAppState = {
  feature: {
    counter: 1,
  },
};

function x02030101Reducer(
  state: IAppState = initialState,
  action: ActionUnion,
) {
  switch (action.type) {
    case ActionTypeEnum.Foo:
      return state;
    default:
      return state;
  }
}

export { x02030101Reducer };
