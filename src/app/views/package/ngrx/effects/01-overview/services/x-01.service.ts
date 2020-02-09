import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '@app/views/package/ngrx/effects/01-overview/vms/i-movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class X01Service {
  constructor(private httpClient: HttpClient) {}

  /**
   * 查询电影列表
   */
  public listMovies(): Observable<Array<IMovie>> {
    return this.httpClient.get<Array<IMovie>>('api/pkgs/ngrx/effects/01/movies');
  }
}
