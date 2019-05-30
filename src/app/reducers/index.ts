import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@app/env/environment';
import { routerReducer } from '@ngrx/router-store';

// tslint:disable-next-line:no-empty-interface
export interface IState {}

export const reducers: ActionReducerMap<IState> = {
  ngrxRouter: routerReducer,
};

export const metaReducers: MetaReducer<IState>[] = !environment.production
  ? []
  : [];
