/*
 * jasmine.objectContaining() 方法，
 * 构造一个'期望数据'，表示实际数据对象必须包含期望数据对象中的属性及其属性值
 */

describe('jasmine.namespace.jasmine.method.objectContaining.01', () => {
  it('01', () => {
    expect({ x: 1, y: 2, z: 3 }).toEqual(jasmine.objectContaining({ y: 2 }));
    expect({ x: 1, y: 2, z: 3 }).not.toEqual(
      jasmine.objectContaining({ y: 3 }),
    );
  });
});
