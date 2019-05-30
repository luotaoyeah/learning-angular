import { createFeatureSelector } from '@ngrx/store';
import { IAppState, IState, NGRX_STATE_KEY } from '../state/IState';
import { userEntityAdapter } from '../reducers/02.reducers';
import { EntityState } from '@ngrx/entity';
import { User } from '../state/User';

const selectFeature = createFeatureSelector<IAppState, IState>(NGRX_STATE_KEY);

const selectAllUsers: (
  state: EntityState<User>,
) => User[] = userEntityAdapter.getSelectors().selectAll;

export { selectFeature, selectAllUsers };
