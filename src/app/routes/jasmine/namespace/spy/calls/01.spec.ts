/*
 * jasmine.Calls.any() 方法，
 * 用来判断该 spy 对象是否被调用过，
 * 如果被调用过，则返回 true，否则返回 false
 */

describe('jasmine.namespace.spy.calls.any.01', () => {
  it('01', () => {
    const spyFoo = jasmine.createSpy('spyFoo');

    expect(spyFoo.calls.any()).toBe(false);

    spyFoo();
    expect(spyFoo.calls.any()).toBe(true);
    expect(spyFoo).toHaveBeenCalled();
  });
});
