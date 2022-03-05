import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { EMPTY, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ACT_APP } from '../../../store/app.action';
import { AppState } from '../../../store/app.state';

@Component({
  selector: 'app--recipes--immutability-helpers',
  templateUrl: './immutability-helpers.component.html',
})
export class ImmutabilityHelpersComponent implements OnInit {
  public x01$: Observable<number> = EMPTY;
  public y01$: Observable<number> = EMPTY;

  @Select(AppState.x02())
  public x02$!: Observable<number>;
  @Select(AppState.y02())
  public y02$!: Observable<number>;

  public x03$: Observable<number> = EMPTY;
  public y03$: Observable<number> = EMPTY;

  public constructor(private store: Store) {
    this.x01$ = this.store.select(AppState.x01).pipe(map((fn) => fn()));
    this.y01$ = this.store.select(AppState.y01).pipe(map((fn) => fn()));

    this.x03$ = this.store.select(AppState.x02());
    this.y03$ = this.store.select(AppState.y02());
  }

  public incrementX() {
    this.store.dispatch(new ACT_APP.x.Update());
  }

  public incrementY() {
    this.store.dispatch(new ACT_APP.y.Update());
  }

  public ngOnInit(): void {
    this.x01$
      .pipe(
        tap((x) => {
          console.log('x01:', x);
        }),
      )
      .subscribe();

    this.y01$
      .pipe(
        tap((y) => {
          console.log('y01:', y);
        }),
      )
      .subscribe();

    this.x02$
      .pipe(
        tap((x) => {
          console.log('x02:', x);
        }),
      )
      .subscribe();

    this.y02$
      .pipe(
        tap((y) => {
          console.log('y02:', y);
        }),
      )
      .subscribe();

    this.x03$
      .pipe(
        tap((x) => {
          console.log('x03:', x);
        }),
      )
      .subscribe();

    this.y03$
      .pipe(
        tap((y) => {
          console.log('y03:', y);
        }),
      )
      .subscribe();
  }
}
