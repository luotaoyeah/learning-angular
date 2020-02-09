import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IState } from '@app/views/package/ngrx/store/03-advanced/03-01-meta-reducer/store/state/i-state';
import { Observable } from 'rxjs';
import { selectX } from '@app/views/package/ngrx/store/03-advanced/03-01-meta-reducer/store/selectors/03-01.selectors';
import { AAction, BAction, CAction } from '@app/views/package/ngrx/store/03-advanced/03-01-meta-reducer/store/actions/03-01.actions';

/*
 * https://ngrx.io/guide/store/metareducers
 */
@Component({
  selector: 'app--x-03-01',
  templateUrl: './x-03-01.component.html',
})
export class X0301Component implements OnInit {
  public x$: Observable<string>;

  constructor(private store: Store<{ '03-01': IState }>) {
    this.x$ = store.pipe(select(selectX));
  }

  public ngOnInit() {}

  public handleA() {
    this.store.dispatch(new AAction());
  }

  public handleB() {
    this.store.dispatch(new BAction());
  }

  public handleC() {
    this.store.dispatch(new CAction());
  }
}
