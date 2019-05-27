import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IState } from '../../../../../../reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-x-01-01',
  templateUrl: './x-01-01.component.html',
  styles: [],
})
export class X0101Component implements OnInit {
  public count$: Observable<number>;

  constructor(store: Store<IState>) {
    this.count$ = store.pipe(select('count'));
  }

  public ngOnInit() {}
}
