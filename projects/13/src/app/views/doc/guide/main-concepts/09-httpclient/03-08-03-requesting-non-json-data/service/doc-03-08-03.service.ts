import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Doc030803Service {
  private url: string = 'assets/tmp/201904260105800.txt';

  constructor(private httpClient: HttpClient) {}

  public getTxt(): Observable<string> {
    return this.httpClient
      .get(this.url, {
        /*
         * HttpClient.get() 方法默认返回的是 JSON 数据，
         * 可以通过 responseType 选项配置返回其他类型的数据，可选项为：
         *     text
         *     json
         *     blob
         *     arrayBuffer
         */
        responseType: 'text',
      })
      .pipe(
        /*
         * tap() 操作符的含义是：搭线监听
         * 对数据流进行监听，并执行一些副作用，但是不会对数据流做更改
         */
        tap((txt: string) => {
          console.log(`[${Doc030803Service.name}] ${txt}`);
        }),
      );
  }
}
