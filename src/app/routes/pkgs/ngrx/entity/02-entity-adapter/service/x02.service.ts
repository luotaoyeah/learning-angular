import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../store/state/user';
import { _HttpClient } from '@delon/theme';

@Injectable({
  providedIn: 'root',
})
export class X02Service {
  constructor(private httpClient: _HttpClient) {}

  /**
   * 加载用户列表
   */
  public listUsers(): Observable<Array<User>> {
    return this.httpClient.get('api/pkgs/ngrx/entity/02/users');
  }
}
