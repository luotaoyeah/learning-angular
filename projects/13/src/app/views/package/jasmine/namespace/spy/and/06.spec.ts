/*
 * jasmine.SpyAnd.stub() 方法，
 * 恢复 spy 对象的默认行为，
 * stub 在这儿翻译为：根除，清除
 */

describe('jasmine.namespace.spy.and.stub.01', () => {
  it('01', () => {
    const spyFoo = jasmine.createSpy('spyFoo');

    spyFoo.and.returnValue('FOO');
    expect(spyFoo()).toEqual('FOO');

    spyFoo.and.stub();
    expect(spyFoo()).toBeUndefined();

    expect(spyFoo).toHaveBeenCalledTimes(2);
  });
});
