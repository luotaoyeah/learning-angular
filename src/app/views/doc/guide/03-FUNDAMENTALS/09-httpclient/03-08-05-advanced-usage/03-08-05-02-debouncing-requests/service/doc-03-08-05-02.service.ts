import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SafeAny } from '@src/typings';
import { IPackageInfo } from '../model/i-package-info';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Doc03080502Service {
  constructor(private httpClient: HttpClient) {}

  public search(key: string): Observable<Array<IPackageInfo>> {
    return this.httpClient
      .get('http://npmsearch.com/query', {
        headers: new HttpHeaders({ 'x-refresh': 'true' }),
        params: new HttpParams({
          fromObject: {
            q: key,
          },
        }),
      })
      .pipe(
        map((data: SafeAny) => {
          return data.results.map((entry: SafeAny) => ({
            name: entry.name[0],
            version: entry.version[0],
            description: entry.description[0],
          }));
        }),
      );
  }
}
