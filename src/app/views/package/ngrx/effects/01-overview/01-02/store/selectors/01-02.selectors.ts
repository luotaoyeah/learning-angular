import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { IState } from '../state/i-state';
import { IMovie } from '../../../vms/i-movie';

interface IAppState {
  'pkgs-ngrx-effects-01-02': IState;
}

const selectFeature = createFeatureSelector<IAppState, IState>(
  'pkgs-ngrx-effects-01-02',
);

const selectMovies: MemoizedSelector<IAppState, Array<IMovie>> = createSelector<
  IAppState,
  IState,
  Array<IMovie>
>(
  selectFeature,
  (state: IState) => state.movies,
);

export { selectMovies, IAppState };
