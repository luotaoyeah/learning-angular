/*
 * jasmine.createSpy() 方法，
 * 用来创建一个 spy 对象，
 * 这个 spy 对象跟普通的 spy 对象的区别在于，它并没有真正地监视某个函数
 */

describe('jasmine.namespace.jasmine.method.createSpy.01', () => {
  it('01', () => {
    const spyFoo = jasmine.createSpy('spyFoo');

    expect(spyFoo).toHaveBeenCalledTimes(0);

    spyFoo('foo');
    spyFoo('bar');

    expect(spyFoo).toHaveBeenCalled();
    expect(spyFoo).toHaveBeenCalledTimes(2);
    expect(spyFoo.calls.count()).toEqual(2);
    expect(spyFoo.calls.first().args).toEqual(
      jasmine.arrayWithExactContents(['foo']),
    );
    expect(spyFoo.calls.mostRecent().object).toBe(global);
    expect(spyFoo.calls.mostRecent().returnValue).toBeUndefined();
  });
});
