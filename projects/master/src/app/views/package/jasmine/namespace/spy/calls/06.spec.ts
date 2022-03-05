/*
 * jasmine.Calls.mostRecent() 方法，
 * 返回最后一次的调用信息
 */

describe('jasmine.namespace.spy.calls.mostRecent.01', () => {
  it('01', () => {
    const spyFoo = jasmine.createSpy('spyFoo');

    spyFoo('foo');
    spyFoo('bar');

    expect(spyFoo.calls.mostRecent().args).toEqual(
      jasmine.arrayWithExactContents(['bar']),
    );
  });
});
