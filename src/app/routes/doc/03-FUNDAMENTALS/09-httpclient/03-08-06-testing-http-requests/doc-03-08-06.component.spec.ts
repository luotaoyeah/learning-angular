import { HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

interface IResult {
  data: string;
}

describe('Doc030806Component', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  /*
   * HttpTestingController 用来在测试时，对请求进行拦截和模拟
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('can test HttpClient.get()', () => {
    const mockResult: IResult = { data: 'FOO' };

    httpClient.get<IResult>('/foo').subscribe((result: IResult) => {
      expect(result).toBe(mockResult);
    });

    /*
     * HttpTestingController.expectOne() 方法，表示期望匹配一个请求，
     * 如果没有匹配的请求，或者匹配的请求有多个，则会失败，
     * 如果成功，则返回匹配到的请求
     */
    const testRequest: TestRequest = httpTestingController.expectOne('/foo');

    expect(testRequest.request.method).toEqual('GET');

    /*
     * TestRequest.flush() 方法，用来模拟请求响应，返回数据
     */
    testRequest.flush(mockResult);

    httpTestingController.verify();
  });

  it('should match request by header', () => {
    const mockResult: IResult = { data: 'FOO' };

    httpClient
      .get<IResult>('/foo', {
        headers: new HttpHeaders({
          H01: 'H01',
        }),
      })
      .subscribe((result: IResult) => {
        expect(result).toBe(mockResult);
      });

    /*
     * HttpTestingController.expectOne() 方法，
     * 除了可以使用请求地址进行匹配之外，还可以使用自定义的逻辑进行匹配
     */
    const testRequest = httpTestingController.expectOne((httpRequest: HttpRequest<any>) => {
      return httpRequest.headers.has('H01');
    });

    testRequest.flush(mockResult);
  });

  it('can test multiple requests ', () => {
    httpClient.get<string>('/foo').subscribe((result: string) => {
      expect(result).toEqual('FOO');
    });

    httpClient.get<string>('/foo').subscribe((result: string) => {
      expect(result).toEqual('BAR');
    });

    httpClient.get<string>('/foo').subscribe((result: string) => {
      expect(result).toEqual('BAZ');
    });

    /*
     * 使用 HttpTestingController.match() 方法，可以同时匹配多个请求
     */
    const testRequests = httpTestingController.match('/foo');
    expect(testRequests.length).toBe(3);

    testRequests[0].flush('FOO');
    testRequests[1].flush('BAR');
    testRequests[2].flush('BAZ');
  });

  it('can test for 404', () => {
    const messaage = '404 ERROR';

    httpClient.get<string>('/foo').subscribe(
      () => {},
      (e: HttpErrorResponse) => {
        expect(e.status).toEqual(404);
        expect(e.error).toEqual(messaage);
      },
    );

    const testRequest = httpTestingController.expectOne('/foo');

    /*
     * 通过 TestRequest.flush() 方法模拟返回的时候，可以设置响应状态码
     */
    testRequest.flush(messaage, {
      status: 404,
      statusText: 'Not Found',
    });
  });

  it('can test network error', () => {
    httpClient.get<string>('/foo').subscribe(
      () => {},
      (e: HttpErrorResponse) => {
        expect(e.error.message).toEqual('NETWORK ERROR');
      },
    );

    const testRequest = httpTestingController.expectOne('/foo');

    /*
     * 使用 TestRequest.error() 方法，模拟一个网络错误
     */
    testRequest.error(
      new ErrorEvent('NETWORK ERROR', {
        message: 'NETWORK ERROR',
      }),
    );
  });
});
