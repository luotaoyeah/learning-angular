/*
 * https://angular.io/guide/testing#services-with-dependencies
 */

import { Doc05040202Service } from './doc-05-04-02.02.service';
import { Doc05040201Service } from './doc-05-04-02.01.service';

describe('Doc05040202Service', () => {
  let service: Doc05040202Service;

  it('should return a sync value by #getValue()', () => {
    /*
     * 如果一个 service 依赖了其他的 service, 并且这个依赖的 service 比较简单,
     * 那么我们在测试的时候, 可以直接通过构造函数参数, 创建并传递一个依赖服务的实例对象
     */
    service = new Doc05040202Service(new Doc05040201Service());
    expect(service.getValue()).toBe('FOO');
  });

  it('should return a sync value from a fake object', () => {
    /*
     * 可以构造一个简单 object 来模拟这个依赖的 service
     */
    service = new Doc05040202Service({
      getValue(): string {
        return 'FOO';
      },
    } as Doc05040201Service);
    expect(service.getValue()).toBe('FOO');
  });

  it('should return a value from a spy', () => {
    const spyObj: jasmine.SpyObj<Doc05040201Service> = jasmine.createSpyObj<
      Doc05040201Service
    >('Doc05040201Service', ['getValue']);
    spyObj.getValue.and.returnValue('FOO');

    service = new Doc05040202Service(spyObj);

    expect(service.getValue()).toBe('FOO');
    expect(spyObj.getValue.calls.count()).toBe(1);
    expect(spyObj.getValue).toHaveBeenCalledTimes(1);
    expect(spyObj.getValue.calls.mostRecent().returnValue).toBe('FOO');
  });
});
