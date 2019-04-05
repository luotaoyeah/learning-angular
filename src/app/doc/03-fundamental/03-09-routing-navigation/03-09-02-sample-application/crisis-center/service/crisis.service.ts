import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Crisis } from '../model/crisis';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  private url = 'api/crises';

  constructor(private http: HttpClient) {}

  /**
   * 获取危机列表
   */
  getCrises(): Observable<Array<Crisis>> {
    return this.http.get<Array<Crisis>>(this.url).pipe(
      tap(() => {
        console.log('[加载危机列表]');
      }),
      catchError(this.handleError<Array<Crisis>>('getCrises', [])),
    );
  }

  /**
   * 根据ID获取危机
   * @param id 危机ID
   */
  getCrisis(id: number): Observable<Crisis> {
    return this.http.get<Crisis>(`${this.url}/${id}`).pipe(
      tap(() => {
        console.log(`[查询危机]: [ id = ${id} ]`);
      }),
      catchError(this.handleError<Crisis>(`getCrisis id=${id}`)),
    );
  }

  /**
   * 更新危机
   * @param crisis 危机
   */
  // tslint:disable-next-line:no-any
  updateCrisis(crisis: Crisis): Observable<any> {
    return this.http
      .put<Crisis>(this.url, crisis, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .pipe(
        tap(() => {
          console.log(`[更新危机]: [ id = ${crisis.id}]`);
        }),
        // tslint:disable-next-line:no-any
        catchError(this.handleError<any>(`updateCrisis`)),
      );
  }

  /**
   * 处理请求错误
   * @param operation 操作
   * @param result 默认结果
   */
  private handleError<T>(operation: string = 'operation', result?: T) {
    // tslint:disable-next-line:no-any
    return (err: any): Observable<T> => {
      console.log(`${operation} FAILED: ${err.body.error}`);
      return of((result || null) as T);
    };
  }
}
