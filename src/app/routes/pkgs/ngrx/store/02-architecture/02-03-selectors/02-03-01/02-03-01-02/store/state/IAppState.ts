import { IBook } from './IBook';
import { IUser } from './IUser';

export interface IAppState {
  selectedUser: IUser;
  allBooks: Array<IBook>;
}
