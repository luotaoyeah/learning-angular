/*
 * jasmine.arrayContaining() 方法，
 * 用来构造一个'期望数据'，
 * 用来判断实际数据是否是一个数组，且包含期望数据中的所有元素
 */

describe('jasmine.namespace.jasmine.method.arrayContaining.01', () => {
  it('01', () => {
    /*
     * jasmine.arrayContaining() 跟 jasmine.ArrayLikeMatchers.toContain() 的区别是：
     *     toContain() 判断数组是否包含某个元素
     *     arrayContaining() 判断数组是否包含多个元素
     */
    expect([1, 2, 3]).toContain(2);
    expect([1, 2, 3]).toContain(3);
    expect([1, 2, 3]).toEqual(jasmine.arrayContaining([2, 3]));
    expect([1, 2, 3]).not.toEqual(jasmine.arrayContaining([3, 4]));
  });
});
