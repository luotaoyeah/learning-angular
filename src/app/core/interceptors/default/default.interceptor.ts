import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpResponseBase,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { NzNotificationService } from 'ng-zorro-antd';
import { environment } from '@app/env/environment';
import { ResponseResult } from '@app/core/vm';
import { some } from 'lodash';
import { DtoUtil } from '@app/core/utils';

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
 * The default HTTP interceptor
 */
@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  /**
   * A whitelist of urls for not checking for response state
   */
  private readonly WHITELIST_URLS: Array<RegExp> = [/\/assets\//];

  constructor(private nzNotificationService: NzNotificationService, private router: Router) {}

  /**
   * Handle success response
   * @param response The response
   */
  private handleSuccess(response: HttpResponseBase): Observable<HttpResponseBase> {
    const { status } = response;

    switch (200) {
      case status:
        if (response instanceof HttpResponse && !some(this.WHITELIST_URLS, reg => reg.test(response.url || ''))) {
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
            return of(new HttpResponse(Object.assign(response, { body: body.data })));
          }
        }
        break;
      default:
        break;
    }

    return of(response);
  }

  /**
   * Handle error response
   * @param response The response
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

  public intercept(
    // tslint:disable-next-line:no-any
    httpRequest: HttpRequest<any>,
    httpHandler: HttpHandler,
    // tslint:disable-next-line:no-any
  ): Observable<HttpEvent<any>> {
    //region prepend request prefix
    let url = httpRequest.url;

    if (!url.startsWith('https://') && !url.startsWith('http://')) {
      url = `${environment.SERVER_URL}${url}`;
    }
    //endregion

    return httpHandler.handle(httpRequest.clone({ url })).pipe(
      // tslint:disable-next-line:no-any
      mergeMap((event: any) => {
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
}
