import { IAppState } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-01/02-03-01-01/store/state/i-app-state';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { IFeatureState } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-01/02-03-01-01/store/state/i-feature-state';

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
