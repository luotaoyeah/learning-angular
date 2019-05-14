/*
 * jasmine.SpyAnd.throwError() 方法，
 * 用来指定该 spy 对象在被调用时，会抛出指定的错误
 */

describe('jasmine.namespace.spy.and.throwError.01', () => {
  it('01', () => {
    const spyFoo = jasmine.createSpy('spyFoo');

    spyFoo.and.throwError('SOME ERR');

    expect(spyFoo).toThrowError('SOME ERR');
  });
});
