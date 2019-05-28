import { IAppState } from '../state/IAppState';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { IUser } from '../state/IUser';
import { IBook } from '../state/IBook';

const selectUser = (state: IAppState) => state.selectedUser;
const selectAllBooks = (state: IAppState) => state.allBooks;

/*
 * 对多个数据进行过滤, 最后再进行汇总
 */
const selectVisibleBooks: MemoizedSelector<
  IAppState,
  Array<IBook>
> = createSelector(
  selectUser,
  selectAllBooks,
  (selectedUser: IUser, allBooks: Array<IBook>) => {
    if (selectedUser && allBooks) {
      return allBooks.filter((book: IBook) => book.userId === selectedUser.id);
    }

    return allBooks;
  },
);

export { selectAllBooks, selectUser, selectVisibleBooks };
