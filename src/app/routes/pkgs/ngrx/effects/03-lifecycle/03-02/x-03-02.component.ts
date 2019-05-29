import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '../store/state/IState';
import { AAction } from '../store/actions/03.actions';

/*
 * https://ngrx.io/guide/effects/lifecycle#non-dispatching-effects
 */
@Component({
  selector: 'app-x-03-02',
  templateUrl: './x-03-02.component.html',
  styles: [],
})
export class X0302Component implements OnInit {
  constructor(private store: Store<{ 'pkgs-ngrx-effects-03': IState }>) {}

  public ngOnInit() {}

  public handleA() {
    this.store.dispatch(new AAction());
  }
}
