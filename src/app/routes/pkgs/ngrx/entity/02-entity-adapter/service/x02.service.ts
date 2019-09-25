import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../store/state/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class X02Service {
  constructor(private httpClient: HttpClient) {}

  /**
   * 加载用户列表
   */
  public listUsers(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>('api/pkgs/ngrx/entity/02/users');
  }
}
