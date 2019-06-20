/*
 * https://angular.io/guide/testing#testing-http-services
 */

import { Doc05040204Service, Hero } from './doc-05-04-02.04.service';
import { TestBed } from '@angular/core/testing';
import { defer } from 'rxjs';
import { _HttpClient } from '@delon/theme';
import { HttpErrorResponse } from '@angular/common/http';

describe('Doc05040204Service', () => {
  let service: Doc05040204Service;
  let httpClientSpyObj: jasmine.SpyObj<_HttpClient>;

  beforeEach(() => {
    /*
     * 测试 HttpClient 跟测试普通的 service 类似, 可以使用 SpyObj 构造模拟数据
     */
    httpClientSpyObj = jasmine.createSpyObj<_HttpClient>('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        Doc05040204Service,
        {
          provide: _HttpClient,
          useValue: httpClientSpyObj,
        },
      ],
    });

    service = TestBed.get(Doc05040204Service);
  });

  it('should return heroes by #getHeroes()', () => {
    const heroes: Array<Hero> = [new Hero(1, 'A'), new Hero(2, 'B')];

    httpClientSpyObj.get.and.returnValue(
      defer(() => {
        Promise.resolve(heroes);
      }),
    );

    service.getHeroes().subscribe((value: Array<Hero>) => {
      expect(value).toEqual(heroes);
    });

    expect(httpClientSpyObj.get).toHaveBeenCalledTimes(1);
  });

  it('should return an error when the server returns a 404', () => {
    httpClientSpyObj.get.and.returnValue(
      defer(() =>
        Promise.reject(
          new HttpErrorResponse({
            status: 404,
            error: 'NOT FOUND',
          }),
        ),
      ),
    );

    service.getHeroes().subscribe(
      () => {},
      (e: HttpErrorResponse) => {
        expect(e.error).toContain('NOT FOUND');
      },
    );
  });
});
