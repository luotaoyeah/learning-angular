import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crisis } from '../models/crisis';
import { HttpHeaders } from '@angular/common/http';
import { _HttpClient } from '@delon/theme';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  constructor(private httpClient: _HttpClient) {}

  /**
   * 获取危机列表
   */
  public getCrises(): Observable<Array<Crisis>> {
    return this.httpClient.get<Array<Crisis>>('api/doc/03/10/02/crises');
  }

  /**
   * 根据ID获取危机
   * @param id 危机ID
   */
  public getCrisis(id: number): Observable<Crisis> {
    return this.httpClient.get<Crisis>(`api/doc/03/10/02/crises/${id}`);
  }

  /**
   * 更新危机
   * @param crisis 危机
   */
  public updateCrisis(crisis: Crisis): Observable<Crisis> {
    return this.httpClient.put<Crisis>(
      `api/doc/03/10/02/crises/${crisis.id}`,
      crisis,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      },
    );
  }
}