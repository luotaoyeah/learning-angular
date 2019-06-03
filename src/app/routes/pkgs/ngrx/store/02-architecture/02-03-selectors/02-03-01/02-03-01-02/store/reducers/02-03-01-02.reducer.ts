import { IAppState } from '../state/i-app-state';
import { ActionTypeEnum, ActionUnion } from '../actions/02-03-01-02.actions';

const initialState: IAppState = {
  selectedUser: {
    id: 1,
    name: 'luotao',
  },
  allBooks: [
    { id: 1, name: 'book01', userId: 1 },
    { id: 2, name: 'book02', userId: 1 },
    { id: 3, name: 'book03', userId: 2 },
    { id: 4, name: 'book04', userId: 1 },
  ],
};

function x02030102Reducer(
  state: IAppState = initialState,
  action: ActionUnion,
) {
  switch (action.type) {
    case ActionTypeEnum.ClearSelectedUser:
      return { ...state, selectedUser: null };
    case ActionTypeEnum.SetSelectedUser:
      return {
        ...state,
        selectedUser: {
          id: 2,
          name: 'luotao',
        },
      };
    case ActionTypeEnum.ResetSelectedUser:
      return {
        ...state,
        selectedUser: {
          id: 1,
          name: 'luotao',
        },
      };
    default:
      return state;
  }
}

export { x02030102Reducer };
