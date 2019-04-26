import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

/*
 * 拦截器（interceptor）用来拦截请求和返回，
 * 自定义的拦截器，需要实现 HttpInterceptor 接口，实现 intercept() 方法
 */
@Injectable()
export class Doc0308050301Interceptor implements HttpInterceptor {
  /*
   * intercept() 方法接收两个参数：
   *     HttpRequest 对象
   *         如果要对该请求对象进行修改，比如修改配置选项，应该使用 HttpRequest.clone() 方法，
   *         克隆一个新的请求对象，再修改这个新的请求对象
   *
   *     HttpHandler 对象
   *         通过 HttpHandler.handle() 方法，将一个 HttpRequest 对象转换为一个 Observable<HttpEvent> 数据流对象
   *         intercept() 方法中的这个 HttpHandler 参数，表示的是下一个拦截器
   *
   * HttpInterceptor.intercept() 方法和 HttpHandler.handle() 方法，
   * 返回的都是一个 Observable<HttpEvent> 对象，
   * HttpEvent 的类型有 6 中，通过 HttpEventType 枚举定义，包括：
   *     HttpEventType.Sent：            请求发送出去
   *     HttpEventType.UploadProgress：  上传进度
   *     HttpEventType.ResponseHeader：  接收到响应头
   *     HttpEventType.DownloadProgress：下载进度
   *     HttpEventType.Response：        接收到响应体
   *     HttpEventType.User：            用户自定义的事件
   */
  intercept(
    // tslint:disable-next-line:no-any
    httpRequest: HttpRequest<any>,
    httpHandler: HttpHandler,
    // tslint:disable-next-line:no-any
  ): Observable<HttpEvent<any>> {
    if (httpRequest.url.includes('doc-03-08-05-03')) {
      let url = httpRequest.url;
      url = `${url}?_=${Date.now()}`;

      /*
       * HttpRequest 和 HttpResponse 对象的属性都是只读的，
       * 如果需要修改，需要使用 HttpRequest.clone() 方法，克隆一个新的对象，然后修改这个新的请求对象，
       * 之所以这样设计，是因为请求可以重试，为了保证请求对象在每次重试的过程中保持一致，
       * 否则，如果某个 interceptor 修改了请求对象，则会导致每次重试请求都是不一样的
       *
       * 只有 HttpRequest 和 HttpResponse 对象的一级属性都是只读的，深层属性依然是可以被修改的，
       * 比如 HttpRequest.body 的属性，就可以直接被修改，
       * 但是，只要我们需要修改 HttpRequest 的属性，就应该使用 clone() 方法进行修改
       */
      const newHttpRequest = httpRequest.clone({
        url,
        body: {
          ...httpRequest.body,
          foo: 'bar',
        },
      });

      console.log(`[${Doc0308050301Interceptor.name}]\n${newHttpRequest.url}`);
      /*
       * 调用 HttpHandler.handle() 方法，表示将请求交给下一个拦截器进行处理
       */
      return httpHandler.handle(newHttpRequest);
    }

    return httpHandler.handle(httpRequest);
  }
}
