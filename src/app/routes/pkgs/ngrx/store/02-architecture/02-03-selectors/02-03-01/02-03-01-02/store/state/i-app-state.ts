import { IBook } from './i-book';
import { IUser } from './i-user';

export interface IAppState {
  selectedUser: IUser;
  allBooks: Array<IBook>;
}
