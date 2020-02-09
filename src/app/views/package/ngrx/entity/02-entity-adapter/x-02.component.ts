import { Component, OnInit } from '@angular/core';
import { IAppState } from '@app/views/package/ngrx/entity/02-entity-adapter/store/state/i-state';
import { createSelector, select, Store } from '@ngrx/store';
import { ClearUsersAction, LoadUsersAction } from '@app/views/package/ngrx/entity/02-entity-adapter/store/actions/02.actions';
import { X02Service } from '@app/views/package/ngrx/entity/02-entity-adapter/service/x02.service';
import { User } from '@app/views/package/ngrx/entity/02-entity-adapter/store/state/user';
import { Observable } from 'rxjs';
import { selectAllUsers, selectFeature } from '@app/views/package/ngrx/entity/02-entity-adapter/store/selectors/02.selectors';

/*
 * https://ngrx.io/guide/entity/adapter
 */
@Component({
  selector: 'app--x-02',
  templateUrl: './x-02.component.html',
})
export class X02Component implements OnInit {
  public users$: Observable<Array<User>>;
  public userTableLoading: boolean = false;

  constructor(private store: Store<IAppState>, private x02Service: X02Service) {
    this.users$ = this.store.pipe(select(createSelector(selectFeature, selectAllUsers)));
  }

  public ngOnInit() {}

  public loadUsers() {
    this.userTableLoading = true;
    this.x02Service.listUsers().subscribe((users: Array<User>) => {
      this.store.dispatch(new LoadUsersAction(users));
      this.userTableLoading = false;
    });
  }

  public clearUsers() {
    this.store.dispatch(new ClearUsersAction());
  }
}
