import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

interface IResult {
  data: string;
}

describe('Doc030806Component', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('can test HttpClient.get()', () => {
    const mockResult: IResult = { data: 'FOO' };

    httpClient.get<IResult>('/foo').subscribe((result: IResult) => {
      expect(result).toBe(mockResult);
    });

    const testRequest: TestRequest = httpTestingController.expectOne('/foo');

    expect(testRequest.request.method).toEqual('GET');

    testRequest.flush(mockResult);

    httpTestingController.verify();
  });
});
