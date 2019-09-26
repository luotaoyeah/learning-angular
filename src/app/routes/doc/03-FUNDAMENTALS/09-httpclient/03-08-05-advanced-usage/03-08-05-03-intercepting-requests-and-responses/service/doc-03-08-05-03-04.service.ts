import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Doc0308050304Service {
  constructor(private httpClient: HttpClient) {}


  public upload(file: File): Observable<any> {
    /*
     * 通过 HttpRequest() 手动构建一个请求对象，
     * 然后通过 reportProgress 配置，报告文件上传进度事件（HttpEventType.UploadProgress）,
     * 最后使用 HttpClient.request() 方法发起请求
     */
    return this.httpClient.request(
      new HttpRequest('POST', 'doc-03-08-05-03-04', file, {
        reportProgress: true,
      }),
    );
  }
}
