import { Doc050704Service } from './doc-05-07-04.service';
import { TestBed } from '@angular/core/testing';
import { Doc050702Service } from './doc-05-07-02.service';
import SpyObj = jasmine.SpyObj;

describe('Doc050704Service', () => {
  let service: Doc050704Service;
  let spyObj: SpyObj<Doc050702Service>;

  beforeEach(() => {
    /*
     * TestBed 是 angular test uitls 中一个重要的工具类，
     * 通过 TestBedStatic.configureTestingModule() 方法可以创建一个用于测试的 test module，
     * 类似一个 NgModule，通过这个 test module 可以实现 service 的依赖注入
     */
    TestBed.configureTestingModule({
      providers: [
        Doc050704Service,
        {
          provide: Doc050702Service,
          /*
           * test module 的 providers 中，也可以使用 SpyObj 来设置某个 DI 的 provider 对象
           */
          useValue: jasmine.createSpyObj<Doc050702Service>('Doc050702Service', [
            'syncGet',
          ]),
        },
      ],
    });

    spyObj = TestBed.get(Doc050702Service);
  });

  it('should return a value', () => {
    /*
     * 通过 TestBedStatic.get() 方法获取某个 service 实例
     */
    service = TestBed.get(Doc050704Service);
    expect(service.syncGet()).toBe('foo');
  });

  it('should return a value from a spy obj', () => {
    spyObj.syncGet.and.returnValue('foo');

    service = TestBed.get(Doc050704Service);
    expect(service.syncGet()).toBe('foo');
    expect(spyObj.syncGet.calls.count()).toBe(1);
    expect(spyObj.syncGet.calls.mostRecent().returnValue).toBe('foo');
  });
});
