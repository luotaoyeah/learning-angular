import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';

/*
 * 模拟文件上传过程
 */
@Injectable()
export class Doc0308050304Interceptor implements HttpInterceptor {
  public intercept(

    httpRequest: HttpRequest<any>,
    httpHandler: HttpHandler,

  ): Observable<HttpEvent<any>> {
    if (httpRequest.url.includes('doc-03-08-05-03-04')) {
      const delay = 500;
      return createUploadEvents(delay);
    }

    return httpHandler.handle(httpRequest);
  }
}

function createUploadEvents(delay: number) {
  const chunks = 5;
  const total = 12345678;
  const chunkSize = Math.ceil(total / chunks);


  return new Observable<HttpEvent<any>>(observer => {
    observer.next({ type: HttpEventType.Sent });

    uploadLoop(0);

    function uploadLoop(loaded: number) {
      setTimeout(() => {
        loaded += chunkSize;

        if (loaded >= total) {
          const doneResponse = new HttpResponse({
            status: 201,
          });
          observer.next(doneResponse);
          observer.complete();
          return;
        }

        const progressEvent: HttpProgressEvent = {
          type: HttpEventType.UploadProgress,
          loaded,
          total,
        };
        observer.next(progressEvent);
        uploadLoop(loaded);
      }, delay);
    }
  });
}
