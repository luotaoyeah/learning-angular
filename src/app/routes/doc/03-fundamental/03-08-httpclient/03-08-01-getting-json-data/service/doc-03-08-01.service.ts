import { Injectable } from '@angular/core';
import { IConfig } from '../model/IConfig';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Doc030801Service {
  private configUrl: string = 'assets/tmp/20190426091400.json';

  constructor(private httpClient: HttpClient) {}

  getConfig(): Observable<IConfig> {
    /*
     * HttpClient.get() 方法的类型参数，又来标识返回数据的类型，
     * 这个类型只是期望返回的类型，实际返回的可能跟这个类型有出入
     */
    return this.httpClient.get<IConfig>(this.configUrl);
  }
}
