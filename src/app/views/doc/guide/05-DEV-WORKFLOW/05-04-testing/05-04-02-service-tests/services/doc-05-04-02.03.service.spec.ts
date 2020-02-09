/*
 * https://angular.io/guide/testing#testing-services-with-the-testbed
 */

import { Doc05040203Service } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-02-service-tests/services/doc-05-04-02.03.service';
import { TestBed } from '@angular/core/testing';
import { Doc05040201Service } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-02-service-tests/services/doc-05-04-02.01.service';

describe('Doc05040203Service', () => {
  let service: Doc05040203Service;
  let doc05040201ServiceSpyObj: jasmine.SpyObj<Doc05040201Service>;

  beforeEach(() => {
    /*
     * TestBed 是 angular testing utilities 中一个重要的工具类,
     * 通过 TestBed.configureTestingModule() 方法可以创建一个专门用于测试的 test module,
     * 类似一个 NgModule, 通过这个 test module 可以实现 service 的依赖注入
     */
    TestBed.configureTestingModule({
      providers: [
        Doc05040203Service,
        {
          provide: Doc05040201Service,
          /*
           * 可以使用一个 SpyObj 对象, 来作为某个依赖的注入值
           */
          useValue: jasmine.createSpyObj<Doc05040201Service>('Doc05040201Service', ['getValue']),
        },
      ],
    });

    /*
     * 通过 TestBed.inject() 方法获取注入器中的某个 service 实例
     */
    doc05040201ServiceSpyObj = TestBed.inject(Doc05040201Service) as jasmine.SpyObj<Doc05040201Service>;
    service = TestBed.inject(Doc05040203Service);
  });

  it('should return a sync value by #getValue()', () => {
    doc05040201ServiceSpyObj.getValue.and.returnValue('FOO');

    expect(service.getValue()).toBe('FOO');
  });

  it('should return a value from a spy obj', () => {
    doc05040201ServiceSpyObj.getValue.and.returnValue('BAR');

    expect(service.getValue()).toBe('BAR');
    expect(doc05040201ServiceSpyObj.getValue).toHaveBeenCalledTimes(1);
    expect(doc05040201ServiceSpyObj.getValue.calls.mostRecent().returnValue).toBe('BAR');
  });
});
