import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Doc03080503Service {
  constructor(private httpClient: HttpClient) {}

  // tslint:disable-next-line:no-any
  public fetch(): Observable<any> {
    return this.httpClient.post('doc-03-08-05-03-03', {
      foo: 'foo',
    });
  }
}
