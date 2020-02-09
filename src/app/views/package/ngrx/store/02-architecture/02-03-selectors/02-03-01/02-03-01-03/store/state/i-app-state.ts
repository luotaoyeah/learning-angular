import { ICounter } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-01/02-03-01-03/store/state/i-counter';

export interface IAppState {
  counter: Array<ICounter>;
}
