import { IState } from '../state/i-state';
import { ActionTypeEnum, ActionUnion } from '../actions/01-02.actions';

function x0102Reducer(state: IState = { movies: [] }, action: ActionUnion) {
  switch (action.type) {
    case ActionTypeEnum.SetMovies:
      return { ...state, movies: action.movies };
    default:
      return state;
  }
}

export { x0102Reducer };
