/*
 * jasmine.SpyAnd.returnValue() 方法，
 * 用来设置 spy 对象的返回值，
 * 后续所有对该 spy 对象的调用，都会返回这个值
 */

describe('jasmine.namespace.spy.and.returnValue.01', () => {
  it('01', () => {
    const spyFoo = jasmine.createSpy('spyFoo');

    spyFoo.and.returnValue('FOO');

    expect(spyFoo()).toEqual('FOO');
    expect(spyFoo()).toEqual('FOO');
    expect(spyFoo()).toEqual('FOO');

    expect(spyFoo.calls.count()).toEqual(3);
  });
});
