import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Doc030804Service {
  constructor(private httpClient: HttpClient) {}

  request(): Observable<object> {
    /*
     * HttpClient 支持各种 HTTP METHOD 请求，GET/POST/PUT/DELETE/HEAD/OPTIONS/PATCH
     */
    return this.httpClient.post(
      '/foo',
      {
        foo: 'foo',
        bar: 'bar',
      },
      /*
       * 可以通过 headers 选项，设置 HTTP headers
       */
      {
        headers: {
          'custom-header': 'custom-header-value',
        },
      },
    );
  }
}
