/*
 * jasmine.SpyAnd.identity() 方法，
 * 返回 spy 对象的标识信息
 */

describe('jasmine.namespace.spy.and.identity.01', () => {
  it('01', () => {
    const spyFoo = jasmine.createSpy('foobar');
    expect(spyFoo.and.identity).toEqual('foobar');
  });
});
