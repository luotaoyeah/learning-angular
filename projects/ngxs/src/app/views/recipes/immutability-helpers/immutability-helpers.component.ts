import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ACT_APP } from '../../../store/app.action';
import { AppState } from '../../../store/app.state';

@Component({
  selector: 'app--recipes--immutability-helpers',
  templateUrl: './immutability-helpers.component.html',
})
export class ImmutabilityHelpersComponent implements OnInit {
  @Select(AppState.x)
  public x$!: Observable<number>;
  @Select(AppState.y)
  public y$!: Observable<number>;

  public constructor(private store: Store) {}

  public incrementX() {
    this.store.dispatch(new ACT_APP.x.Update());
  }

  public incrementY() {
    this.store.dispatch(new ACT_APP.y.Update());
  }

  public ngOnInit(): void {
    this.x$
      .pipe(
        tap((x) => {
          console.log('x:', x);
        }),
      )
      .subscribe();

    this.y$
      .pipe(
        tap((y) => {
          console.log('y:', y);
        }),
      )
      .subscribe();
  }
}
