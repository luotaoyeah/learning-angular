/*
 * jasmine.Calls.allArgs() 方法，
 * 获取所有调用的参数列表数组
 */

describe('jasmine.namespace.spy.calls.allArgs.01', () => {
  it('01', () => {
    const spyFoo = jasmine.createSpy('spyFoo');

    spyFoo('foo', 'bar');
    spyFoo(1, 2, 3);

    expect(spyFoo.calls.allArgs()).toEqual(
      jasmine.arrayWithExactContents([['foo', 'bar'], [1, 2, 3]]),
    );
  });
});
