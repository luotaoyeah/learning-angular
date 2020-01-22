import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IdentityAction } from '../store/actions/03.actions';

/*
 * https://ngrx.io/guide/effects/lifecycle#identify-effects-uniquely
 */
@Component({
  selector: 'app--x-03-05',
  templateUrl: './x-03-05.component.html',
  styles: [],
})
export class X0305Component implements OnInit {

  constructor(private store: Store<any>) {}

  public ngOnInit() {}

  public handleIdentity() {
    this.store.dispatch(new IdentityAction());
  }
}
