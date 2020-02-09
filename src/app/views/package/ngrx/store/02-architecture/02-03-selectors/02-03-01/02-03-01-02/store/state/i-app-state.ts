import { IBook } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-01/02-03-01-02/store/state/i-book';
import { IUser } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-01/02-03-01-02/store/state/i-user';

export interface IAppState {
  selectedUser: IUser;
  allBooks: Array<IBook>;
}
