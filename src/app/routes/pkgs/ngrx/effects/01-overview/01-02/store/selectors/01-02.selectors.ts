import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { IState } from '../state/IState';
import { IMovie } from '../../../vms/IMovie';

interface IAppState {
  'pkgs-ngrx-effect-01-02': IState;
}

const selectFeature = createFeatureSelector<IAppState, IState>(
  'pkgs-ngrx-effect-01-02',
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
