import { createFeatureSelector } from '@ngrx/store';
import { IAppState, IState, NGRX_STATE_KEY } from '../state/i-state';
import { userEntityAdapter } from '../reducers/02.reducers';
import { EntityState } from '@ngrx/entity';
import { User } from '../state/user';

const selectFeature = createFeatureSelector<IAppState, IState>(NGRX_STATE_KEY);

const selectAllUsers: (
  state: EntityState<User>,
) => User[] = userEntityAdapter.getSelectors().selectAll;

export { selectFeature, selectAllUsers };
