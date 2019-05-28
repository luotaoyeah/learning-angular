import { IAppState } from '../state/IAppState';
import { createSelector } from '@ngrx/store';
import { ICounter } from '../state/ICounter';

interface IProps {
  multiply: number;
}

const selectCounter = (state: IAppState) => state.counter;

/*
 * 在使用 selector 对 state 数据进行过滤的时候, 可以传入外部条件,
 * 这个外部条件称之为 props, 作为 selector 和 projector 的最后一个参数传入
 */
const selectCounterMultiply = createSelector(
  selectCounter,
  (counters: Array<ICounter>, props: IProps) =>
    counters.map((counter: ICounter) => counter.value * props.multiply),
);

export { IProps, selectCounter, selectCounterMultiply };
