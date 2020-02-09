import { IState } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-02/store/state/i-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

/*
 * 可以使用 createFeatureSelector() 方法,
 * 比较方便的对 root state 下面的 feature state 进行过滤
 */
const selectFeature = createFeatureSelector<{ '02-03-02': IState }, IState>(
  '02-03-02',
);

const selectCount = createSelector(
  selectFeature,
  (state: IState) => state.count,
);

export { selectCount };
