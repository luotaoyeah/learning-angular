import { Doc050705Service, Hero } from './doc-05-07-05.service';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { defer } from 'rxjs';

describe('Doc050705Service', () => {
  let service: Doc050705Service;
  let httpClientSpy: {
    get: jasmine.Spy;
  };

  beforeEach(() => {
    /*
     * 测试 HttpClient 跟测试普通的 service 类似，可以使用 SpyObj 构造模拟数据
     */
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        Doc050705Service,
        {
          provide: HttpClient,
          useValue: httpClientSpy,
        },
      ],
    });
  });

  it('should return heroes', () => {
    const expectedHeroes: Array<Hero> = [new Hero(1, 'A'), new Hero(2, 'B')];

    httpClientSpy.get.and.returnValue(
      defer(() => {
        Promise.resolve(expectedHeroes);
      }),
    );

    service = TestBed.get(Doc050705Service);

    service.getHeroes().subscribe((heroes: Array<Hero>) => {
      expect(heroes).toEqual(expectedHeroes);
    });

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it('should throw an error', () => {
    httpClientSpy.get.and.returnValue(
      defer(() =>
        Promise.reject(
          new HttpErrorResponse({
            status: 404,
            error: '404',
          }),
        ),
      ),
    );

    service = TestBed.get(Doc050705Service);
    service.getHeroes().subscribe(
      () => {},
      (e: HttpErrorResponse) => {
        expect(e.error).toContain('404');
      },
    );
  });
});
