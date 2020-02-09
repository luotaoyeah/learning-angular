/*
 * jasmine.arrayWithExactContents() 方法，
 * 用来构造一个'期望数据'，
 * 用来判断实际数据是否是一个数组，且包含且只包含期望数据中的所有元素（忽略元素顺序）
 */

describe('jasmine.namespace.jasmine.method.arrayWithExactContents.01', () => {
  it('01', () => {
    expect([1, 2, 3]).toEqual(jasmine.arrayWithExactContents([1, 2, 3]));
    expect([1, 2, 3]).toEqual(jasmine.arrayWithExactContents([3, 2, 1]));
    expect([1, 2, 3]).not.toEqual(jasmine.arrayWithExactContents([1, 2]));
    expect([1, 2, 3]).not.toEqual(jasmine.arrayWithExactContents([1, 2, 3, 4]));
  });
});
