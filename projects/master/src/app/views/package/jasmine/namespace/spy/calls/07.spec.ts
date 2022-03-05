/*
 * jasmine.Calls.first() 方法，
 * 返回第一次的调用信息
 */

describe('jasmine.namespace.spy.calls.first.01', () => {
  it('01', () => {
    const spyFoo = jasmine.createSpy('spyFoo');

    spyFoo('foo');
    spyFoo('bar');

    expect(spyFoo.calls.first().args).toEqual(
      jasmine.arrayWithExactContents(['foo']),
    );
  });
});
