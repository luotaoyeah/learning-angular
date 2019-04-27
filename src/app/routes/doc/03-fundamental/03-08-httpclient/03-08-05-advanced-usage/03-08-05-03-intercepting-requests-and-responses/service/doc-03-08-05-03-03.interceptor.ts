import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class Doc0308050303Interceptor implements HttpInterceptor {
  intercept(
    // tslint:disable-next-line:no-any
    httpRequest: HttpRequest<any>,
    httpHandler: HttpHandler,
    // tslint:disable-next-line:no-any
  ): Observable<HttpEvent<any>> {
    if (httpRequest.url.includes('doc-03-08-05-03')) {
      /*
       * 可以在 interceptor 中对请求做日志记录，使用 tap() 操作符
       */
      return httpHandler.handle(httpRequest).pipe(
        // tslint:disable-next-line:no-any
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log(
              `%c[${Doc0308050303Interceptor.name}]\n${httpRequest.url}`,
              'color:green',
            );
          } else {
            console.log(
              `%c[${Doc0308050303Interceptor.name}]\n${httpRequest.url}`,
              'color:red',
            );
          }
        }),
      );
    }

    return httpHandler.handle(httpRequest);
  }
}
