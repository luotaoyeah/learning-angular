/*
 * spyOn() 方法，
 * 对某个 object 的某个 method 进行监视，返回被监视的 method
 */

import Spy = jasmine.Spy;

describe('jasmine.global.spyOn.01', () => {
  const obj = {
    getName() {
      return 'FOO';
    },
  };

  let spy: Spy;

  beforeEach(() => {
    spy = spyOn<typeof obj>(obj, 'getName');
  });

  it('01', () => {
    spy.and.returnValue('BAR');

    expect(obj.getName()).toEqual('BAR');
  });
});
