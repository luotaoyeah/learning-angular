import { Doc050703Service } from './doc-05-07-03.service';
import { Doc050702Service } from './doc-05-07-02.service';

describe('Doc050703Service', () => {
  let service: Doc050703Service;

  it('#syncGet() should return a value', () => {
    /*
     * 如果一个 service 通过 DI 依赖了其他的 service，
     * 那么我们在测试的时候，可以直接通过构造函数参数，创建并传递依赖服务的实例对象
     */
    service = new Doc050703Service(new Doc050702Service());
    expect(service.syncGet()).toBe('foo');
  });

  it('#syncGet() should return fake a value from a fake object', () => {
    /*
     * 可以构造一个假的依赖对象
     */
    service = new Doc050703Service({
      syncGet(): string {
        return 'FOO';
      },
    } as Doc050702Service);
    expect(service.syncGet()).toBe('FOO');
  });

  it('should return a value from a spy', () => {
    const spyObj = jasmine.createSpyObj<Doc050703Service>('Doc050702Service', [
      'syncGet',
    ]);
    spyObj.syncGet.and.returnValue('foo');

    service = new Doc050703Service(spyObj);

    expect(service.syncGet()).toBe('foo');
    expect(spyObj.syncGet.calls.count()).toBe(1);
    expect(spyObj.syncGet.calls.mostRecent().returnValue).toBe('foo');
  });
});
