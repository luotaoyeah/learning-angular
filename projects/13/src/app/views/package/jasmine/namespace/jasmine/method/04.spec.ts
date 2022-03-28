/*
 * jasmine.anything() 方法，
 * 用来构造一个'期望数据'，表示实际数据是任意的非 null 或者 undefined 的值，
 * 通常用在 toEqual()，toContain()，toHaveBeenCalledWith() 中
 */

describe('jasmine.namespace.jasmine.method.anything.01', () => {
  it('01', () => {
    expect(0).toEqual(jasmine.anything());
    expect(null).not.toEqual(jasmine.anything());
    expect(undefined).not.toEqual(jasmine.anything());
  });

  it('02', () => {
    expect([]).not.toContain(jasmine.anything());
  });
});
