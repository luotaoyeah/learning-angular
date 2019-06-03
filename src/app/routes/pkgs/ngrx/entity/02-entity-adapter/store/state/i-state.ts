import { EntityState } from '@ngrx/entity';
import { User } from './user';

/*
 * 继承 EntityState<T> 接口, 并添加额外的属性
 */
interface IState extends EntityState<User> {
  selectedUserId: string | null;
}

const NGRX_STATE_KEY = 'pkgs-ngrx-entity-02';

interface IAppState {
  [NGRX_STATE_KEY]: IState;
}

export { NGRX_STATE_KEY, IAppState, IState };
