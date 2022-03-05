/*
 * jasmine.Calls.count() 方法，
 * 返回 spy 对象的调用次数
 */

describe('jasmine.namespace.spy.calls.count.01', () => {
  it('01', () => {
    const spyFoo = jasmine.createSpy('spyFoo');

    spyFoo();
    spyFoo();

    expect(spyFoo.calls.count()).toEqual(2);
    expect(spyFoo).toHaveBeenCalledTimes(2);
  });
});
