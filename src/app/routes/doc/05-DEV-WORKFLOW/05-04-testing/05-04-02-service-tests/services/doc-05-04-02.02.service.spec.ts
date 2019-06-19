import { Doc05040202Service } from './doc-05-04-02.02.service';
import { Doc05040201Service } from './doc-05-04-02.01.service';

describe('Doc05040202Service', () => {
  let service: Doc05040202Service;

  it('#syncGet() should return a value', () => {
    /*
     * 如果一个 service 通过 DI 依赖了其他的 service，
     * 那么我们在测试的时候，可以直接通过构造函数参数，创建并传递依赖服务的实例对象
     */
    service = new Doc05040202Service(new Doc05040201Service());
    expect(service.syncGet()).toBe('foo');
  });

  it('#syncGet() should return fake a value from a fake object', () => {
    /*
     * 可以构造一个假的依赖对象
     */
    service = new Doc05040202Service({
      getValue(): string {
        return 'FOO';
      },
    } as Doc05040201Service);
    expect(service.syncGet()).toBe('FOO');
  });

  it('should return a value from a spy', () => {
    const spyObj = jasmine.createSpyObj<Doc05040201Service>(
      'Doc05040201Service',
      ['getValue'],
    );
    spyObj.getValue.and.returnValue('foo');

    service = new Doc05040202Service(spyObj);

    expect(service.syncGet()).toBe('foo');
    expect(spyObj.getValue.calls.count()).toBe(1);
    expect(spyObj.getValue.calls.mostRecent().returnValue).toBe('foo');
  });
});
