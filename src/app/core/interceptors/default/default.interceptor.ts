import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpResponseBase,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DtoUtil } from '@app/core/utils';
import { ResponseResult } from '@app/core/vm';
import { environment } from '@app/env/environment';
import { some } from 'lodash';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { SafeAny } from '@src/typings';

const CODE_MESSAGES: { [index: number]: string } = {
  200: 'OK',
  201: 'Created',
  202: 'Accepted',
  204: 'No Content',
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  406: 'Not Acceptable',
  410: 'Gone',
  422: 'Unprocessable Entity',
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
};

/**
 * the default HTTP interceptor
 */
@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  // a whitelist of urls for not checking for response state
  private readonly WHITELIST_URLS: Array<RegExp> = [/\/assets\//];

  constructor(private nzNotificationService: NzNotificationService, private router: Router) {}

  public intercept(httpRequest: HttpRequest<SafeAny>, httpHandler: HttpHandler): Observable<HttpEvent<SafeAny>> {
    let url = httpRequest.url;

    if (!url.startsWith('https://') && !url.startsWith('http://')) {
      url = `${environment.SERVER_URL}${url}`;
    }

    return httpHandler.handle(httpRequest.clone({ url })).pipe(
      mergeMap((event: SafeAny) => {
        if (event instanceof HttpResponse || event instanceof HttpErrorResponse) {
          return this.handleSuccess(event);
        }

        return of(event);
      }),
      catchError((errorResponse: HttpErrorResponse) => {
        return this.handleError(errorResponse);
      }),
    );
  }

  /**
   * handle error response
   *
   * @param response
   *        the response
   */
  private handleError(response: HttpErrorResponse): Observable<HttpEvent<HttpErrorResponse>> {
    const { status, statusText } = response;

    switch (status) {
      case 401:
        setTimeout(() => {
          this.router.navigateByUrl('/passport/login');
        });
        break;
      case 400:
      case 403:
      case 404:
      case 500:
      case 502:
      case 504:
        break;
      default:
        if (response instanceof HttpErrorResponse) {
          return throwError(response);
        }
    }

    const message: string = statusText || CODE_MESSAGES[status];

    this.nzNotificationService.error('请求错误', message);

    return throwError(response);
  }

  /**
   * handle success response
   *
   * @param response
   *        the response
   */
  private handleSuccess(response: HttpResponseBase): Observable<HttpResponseBase> {
    const { status } = response;

    switch (200) {
      case status:
        if (response instanceof HttpResponse && !some(this.WHITELIST_URLS, (reg) => reg.test(response.url || ''))) {
          const body = DtoUtil.from<ResponseResult<unknown>>(ResponseResult, response.body);
          if (body && !body.state) {
            return throwError(
              new HttpErrorResponse({
                headers: response.headers,
                statusText: body.message,
                status: 400,
                url: response.url || undefined,
              }),
            );
          } else {
            return of({ ...response, body: body.data });
          }
        }
        break;
      default:
        break;
    }

    return of(response);
  }
}
