import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class Doc0308050302Interceptor implements HttpInterceptor {
  public intercept(
    // tslint:disable-next-line:no-any
    httpRequest: HttpRequest<any>,
    httpHandler: HttpHandler,
    // tslint:disable-next-line:no-any
  ): Observable<HttpEvent<any>> {
    if (httpRequest.url.includes('doc-03-08-05-03')) {
      /*
       * 在拦截器中，有两种方式可以修改 http headers，
       * 一种是直接覆盖 headers 的值
       */
      const httpRequest01 = httpRequest.clone({
        headers: httpRequest.headers.set('H01', 'H01'),
      });

      /*
       * 一种是使用 setHeaders 进行设置
       */
      const httpRequest02 = httpRequest01.clone({
        setHeaders: {
          H02: 'H02',
        },
      });

      return httpHandler.handle(httpRequest02);
    }

    return httpHandler.handle(httpRequest);
  }
}
