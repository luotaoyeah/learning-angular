import { Doc050404Service } from './doc-05-04-04.service';
import { TestBed } from '@angular/core/testing';
import { Doc050402Service } from './doc-05-04-02.service';
import SpyObj = jasmine.SpyObj;

describe('Doc050404Service', () => {
  let service: Doc050404Service;
  let spyObj: SpyObj<Doc050402Service>;

  beforeEach(() => {
    /*
     * TestBed 是 angular test uitls 中一个重要的工具类，
     * 通过 TestBedStatic.configureTestingModule() 方法可以创建一个用于测试的 test module，
     * 类似一个 NgModule，通过这个 test module 可以实现 service 的依赖注入
     */
    TestBed.configureTestingModule({
      providers: [
        Doc050404Service,
        {
          provide: Doc050402Service,
          /*
           * test module 的 providers 中，也可以使用 SpyObj 来设置某个 DI 的 provider 对象
           */
          useValue: jasmine.createSpyObj<Doc050402Service>('Doc050402Service', [
            'syncGet',
          ]),
        },
      ],
    });

    spyObj = TestBed.get(Doc050402Service);
  });

  it('should return a value', () => {
    spyObj.syncGet.and.returnValue('foo');

    /*
     * 通过 TestBedStatic.get() 方法获取某个 service 实例
     */
    service = TestBed.get(Doc050404Service);
    expect(service.syncGet()).toBe('foo');
  });

  it('should return a value from a spy obj', () => {
    spyObj.syncGet.and.returnValue('foo');

    service = TestBed.get(Doc050404Service);
    expect(service.syncGet()).toBe('foo');
    expect(spyObj.syncGet.calls.count()).toBe(1);
    expect(spyObj.syncGet.calls.mostRecent().returnValue).toBe('foo');
  });
});
