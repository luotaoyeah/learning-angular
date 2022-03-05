/*
 * jasmine.Calls.argsFor() 方法，
 * 根据调用索引，获取该次调用的参数列表
 */

describe('jasmine.namespace.spy.calls.argsFor.01', () => {
  it('01', () => {
    const spyFoo = jasmine.createSpy('spyFoo');

    spyFoo('foo');
    spyFoo('bar');
    spyFoo('baz');

    expect(spyFoo.calls.argsFor(0)).toEqual(
      jasmine.arrayWithExactContents(['foo']),
    );
    expect(spyFoo.calls.argsFor(1)).toEqual(
      jasmine.arrayWithExactContents(['bar']),
    );
    expect(spyFoo.calls.argsFor(2)).toEqual(jasmine.arrayContaining(['baz']));
  });
});
