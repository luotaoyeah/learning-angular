import { IAppState } from '../state/IAppState';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { IFeatureState } from '../state/IFeatureState';

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
