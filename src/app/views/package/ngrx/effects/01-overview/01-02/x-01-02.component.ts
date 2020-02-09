import { Component, OnInit } from '@angular/core';
import { IMovie } from '@app/views/package/ngrx/effects/01-overview/vms/i-movie';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState, selectMovies } from '@app/views/package/ngrx/effects/01-overview/01-02/store/selectors/01-02.selectors';
import { FetchMoviesAction } from '@app/views/package/ngrx/effects/01-overview/01-02/store/actions/01-02.actions';

/*
 * https://ngrx.io/guide/effects#writing-effects
 */
@Component({
  selector: 'app--x-01-02',
  templateUrl: './x-01-02.component.html',
})
export class X0102Component implements OnInit {
  public movies$: Observable<Array<IMovie>>;

  constructor(private store: Store<IAppState>) {
    this.movies$ = this.store.pipe(select(selectMovies));
  }

  public ngOnInit() {
    this.store.dispatch(new FetchMoviesAction());
  }
}
