import { IAppState } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-01/02-03-01-03/store/state/i-app-state';
import { createSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { ICounter } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-01/02-03-01-03/store/state/i-counter';
import { find } from 'lodash';

interface IProps {
  id: string;
  multiply: number;
}

const selectCounter = (state: IAppState, props: IProps) => state.counter;
const selectCounterById = (counter: Array<ICounter>, props: IProps) =>
  find(counter, (i: ICounter) => i.id === props.id) || { id: '', value: 0 };

/*
 * 在使用 selector 对 state 数据进行过滤的时候, 可以传入外部条件,
 * 这个外部条件称之为 props, 作为 selector 和 projector 的最后一个参数传入
 */
const selectCounterMultiply01: MemoizedSelectorWithProps<
  IAppState,
  IProps,
  Array<number>
> = createSelector(selectCounter, (counters: Array<ICounter>, props: IProps) =>
  counters.map((counter: ICounter) => counter.value * props.multiply),
);

const selectCounterMultiply02: MemoizedSelectorWithProps<IAppState, IProps, number> = createSelector(
  createSelector(selectCounter, selectCounterById),
  (counter: ICounter, props: IProps) => {
    return counter.value * props.multiply;
  },
);

export { IProps, selectCounter, selectCounterMultiply01, selectCounterMultiply02 };
