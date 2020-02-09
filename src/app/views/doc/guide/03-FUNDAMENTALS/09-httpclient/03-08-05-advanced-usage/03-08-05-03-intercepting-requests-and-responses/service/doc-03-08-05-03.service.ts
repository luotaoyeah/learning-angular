import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SafeAny } from '@src/typings';

@Injectable({
  providedIn: 'root',
})
export class Doc03080503Service {
  constructor(private httpClient: HttpClient) {}

  public fetch(): Observable<SafeAny> {
    return this.httpClient.post('doc-03-08-05-03-03', {
      foo: 'foo',
    });
  }
}
