/*
 * jasmine.SpyAnd.returnValues() 方法，
 * 用来设置 spy 对象的多个返回值，
 * 后续对该 spy 对象的调用，会依次返回这些值，直到所有的值都被返回过了，
 * 然后，后续对该 spy 对象的调用，都会返回 undefined
 */

describe('jasmine.namespace.spy.and.returnValues.01', () => {
  it('01', () => {
    const spyFoo = jasmine.createSpy('spyFoo');

    spyFoo.and.returnValues('foo', 'bar');

    expect(spyFoo()).toEqual('foo');
    expect(spyFoo()).toEqual('bar');

    /*
     * 设置的多个返回值都已经被返回过了，
     * 所有后续返回的都是 undefined
     */
    expect(spyFoo()).toBeUndefined();
    expect(spyFoo()).toBeUndefined();

    expect(spyFoo.calls.count()).toEqual(4);
  });
});
