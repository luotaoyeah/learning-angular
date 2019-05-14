/*
 * jasmine.Calls.reset() 方法，
 * 清除对该 spy 对象的跟踪信息，重置相关的调用记录信息
 */

describe('jasmine.namespace.spy.calls.reset.01', () => {
  it('01', () => {
    const spyFoo = jasmine.createSpy('spyFoo');

    spyFoo();
    expect(spyFoo.calls.count()).toBe(1);

    spyFoo();
    expect(spyFoo).toHaveBeenCalledTimes(2);

    spyFoo.calls.reset();
    expect(spyFoo).toHaveBeenCalledTimes(0);
  });
});
