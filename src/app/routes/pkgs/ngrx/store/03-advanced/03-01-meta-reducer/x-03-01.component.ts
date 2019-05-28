import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IState } from './store/state/IState';
import { Observable } from 'rxjs';
import { selectX } from './store/selectors/03-01.selectors';
import { AAction, BAction, CAction } from './store/actions/03-01.actions';

@Component({
  selector: 'app-x-03-01',
  templateUrl: './x-03-01.component.html',
  styles: [],
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
