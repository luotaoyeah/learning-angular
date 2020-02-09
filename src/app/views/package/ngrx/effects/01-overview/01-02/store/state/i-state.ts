import { IMovie } from '@app/views/package/ngrx/effects/01-overview/vms/i-movie';

export interface IState {
  movies: Array<IMovie>;
}
