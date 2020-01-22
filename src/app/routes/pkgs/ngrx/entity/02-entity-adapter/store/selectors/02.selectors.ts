import { userEntityAdapter } from '@app/routes/pkgs/ngrx/entity/02-entity-adapter/store/reducers/02.reducers';
import { IAppState, IState, NGRX_STATE_KEY } from '@app/routes/pkgs/ngrx/entity/02-entity-adapter/store/state/i-state';
import { User } from '@app/routes/pkgs/ngrx/entity/02-entity-adapter/store/state/user';
import { EntityState } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

const selectFeature = createFeatureSelector<IAppState, IState>(NGRX_STATE_KEY);

const selectAllUsers: (state: EntityState<User>) => Array<User> = userEntityAdapter.getSelectors().selectAll;

export { selectFeature, selectAllUsers };
