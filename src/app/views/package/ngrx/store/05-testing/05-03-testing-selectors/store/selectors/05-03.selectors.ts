import { IState } from '@app/views/package/ngrx/store/05-testing/05-03-testing-selectors/store/state/i-state';
import { createSelector } from '@ngrx/store';

const selectEvens = (state: IState): Array<number> => state.evens;
const selectOdds = (state: IState): Array<number> => state.odds;

const selectTotal = createSelector<
  IState,
  Array<number>,
  Array<number>,
  number
>(
  selectEvens,
  selectOdds,
  (evens: Array<number>, odds: Array<number>) => {
    return (
      evens.reduce((prev: number, curr: number) => prev + curr) +
      odds.reduce((prev: number, curr: number) => prev + curr)
    );
  },
);

export { selectTotal };
