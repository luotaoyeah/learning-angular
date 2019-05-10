import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class Doc03080502Interceptor implements HttpInterceptor {
  public intercept(
    // tslint:disable-next-line:no-any
    httpRequest: HttpRequest<any>,
    httpHandler: HttpHandler,
    // tslint:disable-next-line:no-any
  ): Observable<HttpEvent<any>> {
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
