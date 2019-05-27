import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@env/environment';
import { counterReducer } from '../routes/pkgs/ngrx/store/01-getting-started/store/reducers/counter.reducer';

// tslint:disable-next-line:no-empty-interface
export interface IState {
  count: number;
}

export const reducers: ActionReducerMap<IState> = {
  count: counterReducer,
};

export const metaReducers: MetaReducer<IState>[] = !environment.production
  ? []
  : [];
