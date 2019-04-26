import { Injectable } from '@angular/core';
import { IConfig } from '../model/IConfig';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Doc030802Service {
  private configUrl: string = 'assets/tmp/20190426091401.json';

  constructor(private httpClient: HttpClient) {}

  getConfig(): Observable<IConfig> {
    return this.httpClient.get<IConfig>(this.configUrl);
  }
}
