import { Doc05040203Service } from './doc-05-04-02.03.service';
import { TestBed } from '@angular/core/testing';
import { Doc05040201Service } from './doc-05-04-02.01.service';
import SpyObj = jasmine.SpyObj;

describe('Doc05040203Service', () => {
  let service: Doc05040203Service;
  let spyObj: SpyObj<Doc05040201Service>;

  beforeEach(() => {
    /*
     * TestBed 是 angular test uitls 中一个重要的工具类，
     * 通过 TestBedStatic.configureTestingModule() 方法可以创建一个用于测试的 test module，
     * 类似一个 NgModule，通过这个 test module 可以实现 service 的依赖注入
     */
    TestBed.configureTestingModule({
      providers: [
        Doc05040203Service,
        {
          provide: Doc05040201Service,
          /*
           * test module 的 providers 中，也可以使用 SpyObj 来设置某个 DI 的 provider 对象
           */
          useValue: jasmine.createSpyObj<Doc05040201Service>(
            'Doc05040201Service',
            ['getValue'],
          ),
        },
      ],
    });

    spyObj = TestBed.get(Doc05040201Service);
  });

  it('should return a value', () => {
    spyObj.getValue.and.returnValue('foo');

    /*
     * 通过 TestBedStatic.get() 方法获取某个 service 实例
     */
    service = TestBed.get(Doc05040203Service);
    expect(service.syncGet()).toBe('foo');
  });

  it('should return a value from a spy obj', () => {
    spyObj.getValue.and.returnValue('foo');

    service = TestBed.get(Doc05040203Service);
    expect(service.syncGet()).toBe('foo');
    expect(spyObj.getValue.calls.count()).toBe(1);
    expect(spyObj.getValue.calls.mostRecent().returnValue).toBe('foo');
  });
});
