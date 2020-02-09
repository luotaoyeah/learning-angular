/*
 * https://angular.io/guide/testing#service-tests
 */

import { Doc05040201Service } from './doc-05-04-02.01.service';

/*
 * 对于简单的 service, 可以不依赖于 angular 提供的测试工具, 直接进行测试
 */
describe('Doc05040201Service', () => {
  let service: Doc05040201Service;

  beforeEach(() => {
    service = new Doc05040201Service();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a sync value by #getValue()', () => {
    expect(service.getValue()).toBe('FOO');
  });

  it('should return a promise value by #getPromiseValue()', (done: DoneFn) => {
    service.getPromiseValue().then((value: string) => {
      expect(value).toBe('FOO');
      done();
    });
  });

  it('should return an observable value by #getObservableValue()', () => {
    service.getObservableValue().subscribe((value: string) => {
      expect(value).toEqual('FOO');
    });
  });
});
