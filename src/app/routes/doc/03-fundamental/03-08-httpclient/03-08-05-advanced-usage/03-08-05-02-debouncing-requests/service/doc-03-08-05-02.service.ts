import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPackageInfo } from '../model/IPackageInfo';
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
        // tslint:disable-next-line:no-any
        map((data: any) => {
          // tslint:disable-next-line:no-any
          return data.results.map((entry: any) => ({
            name: entry.name[0],
            version: entry.version[0],
            description: entry.description[0],
          }));
        }),
      );
  }
}
