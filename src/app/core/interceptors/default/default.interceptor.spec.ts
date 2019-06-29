import { _HttpClient } from '@delon/theme';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NzNotificationService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { DA_SERVICE_TOKEN } from '@delon/auth';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { DefaultInterceptor, ResponseResult } from '@app/core';
import { TranslateService } from '@ngx-translate/core';

describe('src/app/core/interceptors/default/default.interceptor.ts', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  const MockNzNotificationService = {
    error: jasmine.createSpy('error'),
  };

  const MockRouter = {
    navigateByUrl: jasmine.createSpy('navigateByUrl'),
  };

  const MockHttpClient = {
    end: jasmine.createSpy('end'),
  };

  const MockITokenService = {
    clear: jasmine.createSpy('clear'),
  };

  const MockTranslateService = {
    instant: jasmine.createSpy('instant'),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: NzNotificationService, useValue: MockNzNotificationService },
        { provide: Router, useValue: MockRouter },
        { provide: _HttpClient, useValue: MockHttpClient },
        { provide: DA_SERVICE_TOKEN, useValue: MockITokenService },
        { provide: TranslateService, useValue: MockTranslateService },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: DefaultInterceptor,
          multi: true,
        },
      ],
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    MockNzNotificationService.error.calls.reset();
    MockRouter.navigateByUrl.calls.reset();
    MockHttpClient.end.calls.reset();
    MockITokenService.clear.calls.reset();
    MockTranslateService.instant.calls.reset();
  });

  it('should handle successful request', () => {
    const response: ResponseResult<string> = new ResponseResult<string>({
      state: true,
      data: 'FOO',
    });

    httpClient.get<string>('foo').subscribe((result: string) => {
      expect(result).toEqual(response.data);
    });

    const testRequest: TestRequest = httpTestingController.expectOne('./foo');

    testRequest.flush(response);

    httpTestingController.verify();
  });

  it('should handle failed request', () => {
    const response: ResponseResult<string> = new ResponseResult<string>({
      state: false,
      data: 'FOO',
    });

    httpClient.get<ResponseResult<string>>('foo').subscribe(
      () => {},
      (e: HttpErrorResponse) => {
        expect(e.status).toEqual(400);
        expect(MockHttpClient.end).toHaveBeenCalledTimes(2);
        expect(MockNzNotificationService.error).toHaveBeenCalledTimes(1);
      },
    );

    const testRequest = httpTestingController.expectOne('./foo');

    testRequest.flush(response);

    httpTestingController.verify();
  });

  it('should handle 201', () => {
    const response: ResponseResult<string> = new ResponseResult<string>({
      state: true,
      data: 'FOO',
    });

    httpClient
      .get<ResponseResult<string>>('foo')
      .subscribe((value: ResponseResult<string>) => {
        expect(value).toBe(response);
        expect(MockHttpClient.end).toHaveBeenCalledTimes(1);
        expect(MockNzNotificationService.error).not.toHaveBeenCalled();
      });

    const testRequest = httpTestingController.expectOne('./foo');

    testRequest.flush(response, {
      status: 201,
      statusText: 'Created',
    });

    httpTestingController.verify();
  });

  it('should handle 304', () => {
    const response: ResponseResult<string> = new ResponseResult<string>({
      state: true,
      data: 'FOO',
    });

    httpClient.get<ResponseResult<string>>('foo').subscribe(
      () => {},
      (e: HttpErrorResponse) => {
        expect(e.status).toBe(304);
        expect(MockHttpClient.end).toHaveBeenCalledTimes(1);
        expect(MockNzNotificationService.error).not.toHaveBeenCalled();
      },
    );

    const testRequest = httpTestingController.expectOne('./foo');

    testRequest.flush(response, {
      status: 304,
      statusText: 'Not Modified',
    });

    httpTestingController.verify();
  });

  it('should handle 401', () => {
    const response: ResponseResult<string> = new ResponseResult<string>({
      state: true,
      data: 'FOO',
    });

    httpClient.get<ResponseResult<string>>('foo').subscribe(
      () => {},
      (e: HttpErrorResponse) => {
        expect(e.status).toEqual(401);
        expect(MockHttpClient.end).toHaveBeenCalledTimes(1);
        expect(MockITokenService.clear).toHaveBeenCalledTimes(1);
      },
    );

    const testRequest = httpTestingController.expectOne('./foo');

    testRequest.flush(response, {
      status: 401,
      statusText: 'Authorization Required',
    });

    httpTestingController.verify();
  });

  it('should handle 500', () => {
    const response: ResponseResult<string> = new ResponseResult<string>({
      state: true,
      data: 'FOO',
    });

    httpClient.get<ResponseResult<string>>('foo').subscribe(
      () => {},
      (e: HttpErrorResponse) => {
        expect(e.status).toEqual(500);
      },
    );

    const testRequest = httpTestingController.expectOne('./foo');

    testRequest.flush(response, {
      status: 500,
      statusText: 'Internal Server Error',
    });

    httpTestingController.verify();
  });

  it('should handle unknown error', () => {
    httpClient.get<string>('foo').subscribe(
      () => {},
      (e: HttpErrorResponse) => {
        expect(e.status).toEqual(0);
      },
    );

    const testRequest = httpTestingController.expectOne('./foo');

    testRequest.error(
      new ErrorEvent('UNKNOWN', {
        message: 'UNKNOWN ERROR',
      }),
    );

    httpTestingController.verify();
  });

  it('should not parse to DTO for WHITELIST_URLS', () => {
    const response = { foo: 'FOO' };

    httpClient
      .get<{ foo: string }>('assets/foo.json')
      .subscribe((value: { foo: string }) => {
        expect(value).toBe(response);
      });

    const testRequest = httpTestingController.expectOne('./assets/foo.json');

    testRequest.flush(response);

    httpTestingController.verify();
  });
});
