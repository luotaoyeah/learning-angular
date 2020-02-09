import { Action } from '@ngrx/store';
import { IMovie } from '../../../vms/i-movie';

enum ActionTypeEnum {
  FetchMovies = '[X0102Component] FetchMovies',
  SetMovies = '[X0102Component] SetMovies',
}

class FetchMoviesAction implements Action {
  public readonly type: ActionTypeEnum.FetchMovies = ActionTypeEnum.FetchMovies;
}

class SetMoviesAction implements Action {
  public readonly type: ActionTypeEnum.SetMovies = ActionTypeEnum.SetMovies;
  public movies: Array<IMovie> = [];

  constructor(movies: Array<IMovie>) {
    this.movies = movies;
  }
}

type ActionUnion = FetchMoviesAction | SetMoviesAction;

export { ActionTypeEnum, FetchMoviesAction, SetMoviesAction, ActionUnion };
