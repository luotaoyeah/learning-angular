import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-01/02-03-01-02/store/state/i-book';
import { createSelector, select, Store } from '@ngrx/store';
import { IAppState } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-01/02-03-01-02/store/state/i-app-state';
import { selectVisibleBooks } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-01/02-03-01-02/store/selectors/02-03-01-02.selectors';
import { ClearSelectedUserAction, ResetSelectedUserAction, SetSelectedUserAction } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-01/02-03-01-02/store/actions/02-03-01-02.actions';

/*
 * https://ngrx.io/guide/store/selectors#using-selectors-for-multiple-pieces-of-state
 */
@Component({
  selector: 'app--x-02-03-01-02',
  templateUrl: './x-02-03-01-02.component.html',
})
export class X02030102Component implements OnInit {
  public books$: Observable<Array<IBook>>;

  constructor(
    private store: Store<{
      '02-03-01-02': IAppState;
    }>,
  ) {
    this.books$ = store.pipe(select(createSelector((state: { '02-03-01-02': IAppState }) => state['02-03-01-02'], selectVisibleBooks)));
  }

  public ngOnInit() {}

  public resetUser() {
    this.store.dispatch(new ResetSelectedUserAction());
  }

  public setUser() {
    this.store.dispatch(new SetSelectedUserAction());
  }

  public clearUser() {
    this.store.dispatch(new ClearSelectedUserAction());
  }
}
