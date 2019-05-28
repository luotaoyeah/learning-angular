import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IState } from './store/state/IState';
import { selectX } from './store/selectors/04-01.selectors';
import { AAction } from './store/actions/04-01.actions';

/*
 * https://ngrx.io/guide/store/recipes/injecting
 */
@Component({
  selector: 'app-x-04-01',
  templateUrl: './x-04-01.component.html',
  styles: [],
})
export class X0401Component implements OnInit {
  public x$: Observable<number>;

  constructor(private store: Store<{ '04-01': IState }>) {
    this.x$ = store.pipe(select(selectX));
  }

  public ngOnInit() {}

  public handleX() {
    this.store.dispatch(new AAction());
  }
}
