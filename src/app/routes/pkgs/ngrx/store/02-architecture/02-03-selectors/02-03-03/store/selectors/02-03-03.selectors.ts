import { IState } from '../state/IState';
import { createSelector } from '@ngrx/store';

const selectFeature = (rootState: { '02-03-03': IState }) => {
  console.log('[X020303Component]\n', 'selectFeature');
  return rootState['02-03-03'];
};

const selectCount01 = (state: IState) => {
  return state.count01;
};
const selectCount02 = (state: IState) => {
  return state.count02;
};

const selectTotal = createSelector(
  selectFeature,
  createSelector(
    selectCount01,
    selectCount02,
    (count01: number, count02: number) => {
      return count01 + count02;
    },
  ),
);

export { selectTotal };
