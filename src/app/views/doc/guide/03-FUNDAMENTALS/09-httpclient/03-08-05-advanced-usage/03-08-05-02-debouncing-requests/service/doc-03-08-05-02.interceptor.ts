import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SafeAny } from '@src/typings';

@Injectable()
export class Doc03080502Interceptor implements HttpInterceptor {
  public intercept(httpRequest: HttpRequest<SafeAny>, httpHandler: HttpHandler): Observable<HttpEvent<SafeAny>> {
    if (httpRequest.url.startsWith('http://npmsearch.com/query')) {
      return httpHandler.handle(
        httpRequest.clone({
          headers: new HttpHeaders(),
        }),
      );
    }

    return httpHandler.handle(httpRequest);
  }
}
