import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SafeAny } from '@src/typings';
import { IdentityAction } from '@app/views/package/ngrx/effects/03-lifecycle/store/actions/03.actions';

/*
 * https://ngrx.io/guide/effects/lifecycle#identify-effects-uniquely
 */
@Component({
  selector: 'app--x-03-05',
  templateUrl: './x-03-05.component.html',
})
export class X0305Component implements OnInit {
  constructor(private store: Store<SafeAny>) {}

  public ngOnInit() {}

  public handleIdentity() {
    this.store.dispatch(new IdentityAction());
  }
}
