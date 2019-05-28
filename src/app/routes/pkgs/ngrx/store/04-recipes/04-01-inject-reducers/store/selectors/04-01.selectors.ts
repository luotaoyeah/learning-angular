import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { IState } from '../state/IState';

const selectFeature = createFeatureSelector<{ '04-01': IState }, IState>(
  '04-01',
);

const selectX: MemoizedSelector<{ '04-01': IState }, number> = createSelector(
  selectFeature,
  (state: IState) => {
    return state.x;
  },
);

export { selectX };
