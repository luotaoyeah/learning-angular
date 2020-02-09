import { IAppState } from '../state/i-app-state';
import { ActionTypeEnum, ActionUnion } from '../actions/02-03-01-03.actions';

const initialState: IAppState = {
  counter: [
    {
      id: '1',
      value: 1,
    },
    {
      id: '2',
      value: 2,
    },
    {
      id: '3',
      value: 3,
    },
  ],
};

function x02030103Reducer(
  state: IAppState = initialState,
  action: ActionUnion,
) {
  switch (action.type) {
    case ActionTypeEnum.SetCounter:
      return {
        ...state,
        counter: [
          {
            id: '1',
            value: 4,
          },
          {
            id: '2',
            value: 5,
          },
          {
            id: '3',
            value: 6,
          },
        ],
      };
    case ActionTypeEnum.ResetCounter:
      return {
        ...state,
        counter: [
          {
            id: '1',
            value: 1,
          },
          {
            id: '2',
            value: 2,
          },
          {
            id: '3',
            value: 3,
          },
        ],
      };
    default:
      return state;
  }
}

export { x02030103Reducer };
