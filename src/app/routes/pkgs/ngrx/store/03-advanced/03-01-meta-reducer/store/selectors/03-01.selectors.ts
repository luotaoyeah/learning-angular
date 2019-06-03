import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState } from '../state/i-state';

const selectFeature = createFeatureSelector<{ '03-01': IState }, IState>(
  '03-01',
);

const selectX = createSelector(
  selectFeature,
  (state: IState) => state.x,
);

export { selectFeature, selectX };
