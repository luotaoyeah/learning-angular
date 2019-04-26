import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Doc03080501Service {
  constructor(private httpClient: HttpClient) {}

  getSomething(): Observable<object> {
    /*
     * 可以配置请求的 headers 和 query params，
     * HttpHeaders.set() 方法可以链式调用，添加或者修改一个 header，
     * 类似的，HttpParams.set() 方法可以链式调用，添加或者修改一个 param
     */
    return this.httpClient.get('/foo', {
      headers: new HttpHeaders({
        h00: 'h00',
      })
        .set('h01', 'h01')
        .set('h02', 'h02'),
      params: new HttpParams({
        fromObject: { p01: 'p01' },
      })
        .set('p02', 'p02')
        .set('p03', 'p03-01')
        /*
         * 如果某个参数有多个值，即是一个数组，
         * 则可以使用 HttpParams.append() 方法附加新的值
         */
        .append('p03', 'p03-02'),
    });
  }
}
