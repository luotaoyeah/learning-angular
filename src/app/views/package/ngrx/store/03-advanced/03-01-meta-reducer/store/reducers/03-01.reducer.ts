import { IState } from '@app/views/package/ngrx/store/03-advanced/03-01-meta-reducer/store/state/i-state';
import { ActionTypeEnum, ActionUnion } from '@app/views/package/ngrx/store/03-advanced/03-01-meta-reducer/store/actions/03-01.actions';
import { ActionReducer } from '@ngrx/store';
import { X0301Component } from '@app/views/package/ngrx/store/03-advanced/03-01-meta-reducer/x-03-01.component';

const initialState: IState = {
  x: 'A',
};

function x0301Reducer(state: IState = initialState, action: ActionUnion) {
  if (
    [ActionTypeEnum.A, ActionTypeEnum.B, ActionTypeEnum.C].includes(action.type)
  ) {
    console.log(
      `%c[${X0301Component.name}]\n`,
      'color:green',
      '[x0301Reducer]',
      action.type,
    );
  }

  switch (action.type) {
    case ActionTypeEnum.A:
      return { ...state, x: 'A' };
    case ActionTypeEnum.B:
      return { ...state, x: 'B' };
    case ActionTypeEnum.C:
      return { ...state, x: 'C' };
    default:
      return state;
  }
}

function metaReducer01(reducer: ActionReducer<IState, ActionUnion>) {
  return (state: IState | undefined, action: ActionUnion) => {
    if (
      [ActionTypeEnum.A, ActionTypeEnum.B, ActionTypeEnum.C].includes(
        action.type,
      )
    ) {
      console.log(
        `%c[${X0301Component.name}]\n`,
        'color:red',
        '[metaReducer01]',
        action.type,
      );
    }
    return reducer(state, action);
  };
}

function metaReducer02(reducer: ActionReducer<IState, ActionUnion>) {
  return (state: IState | undefined, action: ActionUnion) => {
    if (
      [ActionTypeEnum.A, ActionTypeEnum.B, ActionTypeEnum.C].includes(
        action.type,
      )
    ) {
      console.log(
        `%c[${X0301Component.name}]\n`,
        'color:yellow',
        '[metaReducer02]',
        action.type,
      );
    }

    return reducer(state, action);
  };
}

export { initialState, x0301Reducer, metaReducer01, metaReducer02 };
