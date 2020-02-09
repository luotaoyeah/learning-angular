import { IAppState } from '../state/i-app-state';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { IFeatureState } from '../state/i-feature-state';

/**
 *
 * @param state root state
 */
const selectFeature = (state: IAppState) => state.feature;

/**
 *
 */
const selectFeatureCount: MemoizedSelector<IAppState, number> = createSelector(
  selectFeature,
  (state: IFeatureState) => state.counter,
);

export { selectFeature, selectFeatureCount };
