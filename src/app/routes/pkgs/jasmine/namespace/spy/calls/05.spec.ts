/*
 * jasmine.Calls.all() 方法，
 * 返回该 spy 对象所有的调用信息，
 * 每个调用信息中包括：
 *     1. this 对象
 *     2. 参数列表
 *     3. 返回值
 */

describe('jasmine.namespace.spy.calls.all.01', () => {
  it('01', () => {
    const spyFoo = jasmine.createSpy('spyFoo');

    const ctx01 = {};

    spyFoo('foo');
    spyFoo.call(ctx01, 'bar');

    const callInfos = spyFoo.calls.all();

    expect(callInfos[0].args).toEqual(jasmine.arrayWithExactContents(['foo']));
    expect(callInfos[1].object).toBe(ctx01);
  });
});
