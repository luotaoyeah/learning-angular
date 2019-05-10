import { Injectable } from '@angular/core';
import { IConfig } from '../model/IConfig';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Doc030801Service {
  private configUrl: string = 'assets/tmp/20190426091400.json';

  constructor(private httpClient: HttpClient) {}

  public getConfig(): Observable<IConfig> {
    /*
     * HttpClient.get() 方法的类型参数，用来标识返回数据的类型，
     * 这个类型只是期望返回的类型，实际返回的可能跟这个类型有出入
     */
    return this.httpClient.get<IConfig>(this.configUrl);
  }

  /**
   * 默认情况下，HttpClient.get() 方法返回的是 body 数据，
   * 如果需要返回完整的 response 数据，需要配置参数 observe: 'response'
   */
  public getConfigResponse(): Observable<HttpResponse<IConfig>> {
    return this.httpClient.get<IConfig>(this.configUrl, {
      observe: 'response',
    });
  }
}
