import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../vms/i-movie';
import { _HttpClient } from '@delon/theme';

@Injectable({
  providedIn: 'root',
})
export class X01Service {
  constructor(private httpClient: _HttpClient) {}

  /**
   * 查询电影列表
   */
  public listMovies(): Observable<Array<IMovie>> {
    return this.httpClient.get<Array<IMovie>>(
      'api/pkgs/ngrx/effects/01/movies',
    );
  }
}
