import { Injectable } from '@angular/core';
import { IConfig } from '../model/IConfig';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Doc030802Service {
  private configUrl: string = 'assets/tmp/20190426091401.json';

  constructor(private httpClient: HttpClient) {}

  public getConfig(): Observable<IConfig> {
    return this.httpClient.get<IConfig>(this.configUrl).pipe(
      /*
       * 可以使用 retry() 操作符，对请求进行重试，
       * 即如果请求失败，则自动重新发起新的请求，可以指定重试的次数
       */
      retry(1),
      /*
       * 可以使用 catchError() 操作符，对错误进行处理，
       * HttpClient 如果请求失败，返回的是一个 HttpErrorResponse 对象
       */
      catchError((e: HttpErrorResponse) => {
        return throwError(e);
      }),
    );
  }
}
