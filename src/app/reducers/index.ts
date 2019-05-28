import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@env/environment';

// tslint:disable-next-line:no-empty-interface
export interface IState {}

export const reducers: ActionReducerMap<IState> = {};

export const metaReducers: MetaReducer<IState>[] = !environment.production
  ? []
  : [];
