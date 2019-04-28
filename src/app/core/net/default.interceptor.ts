import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponseBase,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { NzNotificationService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { environment } from '@env/environment';
import { DA_SERVICE_TOKEN } from '@delon/auth';

const CODEMESSAGE: { [index: number]: string } = {
  200: '服务器成功返回请求的数据',
  201: '新建或修改数据成功',
  202: '一个请求已经进入后台排队（异步任务）',
  204: '删除数据成功',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作',
  401: '用户没有权限（令牌、用户名、密码错误）',
  403: '用户得到授权，但是访问是被禁止的',
  404: '请求的地址不存在',
  406: '请求的格式不可得',
  410: '请求的资源被永久删除，且不会再得到的',
  422: '当创建一个对象时，发生一个验证错误',
  500: '服务器发生错误，请检查服务器',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时',
};

/**
 * 默认HTTP拦截器，其注册细节见 `app.module.ts`
 */
@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  private get notificationService(): NzNotificationService {
    return this.injector.get(NzNotificationService);
  }

  /**
   * 路由跳转
   * @param url 跳转地址
   */
  private goTo(url: string) {
    setTimeout(() => this.injector.get(Router).navigateByUrl(url));
  }

  /**
   * 检查返回的状态码
   * @param httpResponseBase 返回数据
   */
  private checkStatus(httpResponseBase: HttpResponseBase) {
    if (
      (httpResponseBase.status >= 200 && httpResponseBase.status < 300) ||
      httpResponseBase.status === 401
    ) {
      return;
    }

    const errorMessage =
      CODEMESSAGE[httpResponseBase.status] || httpResponseBase.statusText;
    this.notificationService.error(
      `请求错误 ${httpResponseBase.status}`,
      `${httpResponseBase.url}<br />${errorMessage}`,
      {},
    );
  }

  // tslint:disable-next-line:no-any
  private handleData(ev: HttpResponseBase): Observable<any> {
    // 可能会因为 `throw` 导出无法执行 `_HttpClient` 的 `end()` 操作
    if (ev.status > 0) {
      this.injector.get(_HttpClient).end();
    }

    this.checkStatus(ev);

    // 业务处理：一些通用操作
    switch (ev.status) {
      case 200:
        // 业务层级错误处理，以下是假定restful有一套统一输出格式（指不管成功与否都有相应的数据格式）情况下进行处理
        // 例如响应内容：
        //  错误内容：{ status: 1, msg: '非法参数' }
        //  正确内容：{ status: 0, response: {  } }
        // 则以下代码片断可直接适用
        // if (event instanceof HttpResponse) {
        //     const body: any = event.body;
        //     if (body && body.status !== 0) {
        //         this.notificationService.error(body.msg);
        //         // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
        //         // this.http.get('/').subscribe() 并不会触发
        //         return throwError({});
        //     } else {
        //         // 重新修改 `body` 内容为 `response` 内容，对于绝大多数场景已经无须再关心业务状态码
        //         return of(new HttpResponse(Object.assign(event, { body: body.response })));
        //         // 或者依然保持完整的格式
        //         return of(event);
        //     }
        // }
        break;
      case 401: // 未登录状态码
        this.injector.get(DA_SERVICE_TOKEN).clear();
        this.goTo('/passport/login');
        break;
      case 403:
      case 404:
      case 500:
        break;
      default:
        if (ev instanceof HttpErrorResponse) {
          console.warn('未知错误', ev);
          return throwError(ev);
        }
        break;
    }
    return of(ev);
  }

  intercept(
    // tslint:disable-next-line:no-any
    request: HttpRequest<any>,
    httpHandler: HttpHandler,
    // tslint:disable-next-line:no-any
  ): Observable<HttpEvent<any>> {
    // 统一加上服务端前缀
    let url = request.url;
    if (!url.startsWith('https://') && !url.startsWith('http://')) {
      url = environment.SERVER_URL + url;
    }

    const newRequest = request.clone({ url });
    return httpHandler.handle(newRequest).pipe(
      // tslint:disable-next-line:no-any
      mergeMap((event: any) => {
        // 允许统一对请求错误处理
        if (event instanceof HttpResponseBase) {
          return this.handleData(event);
        }
        // 若一切都正常，则后续操作
        return of(event);
      }),
      catchError((err: HttpErrorResponse) => this.handleData(err)),
    );
  }
}
