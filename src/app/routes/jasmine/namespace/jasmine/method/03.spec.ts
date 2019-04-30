/*
 * jasmine.any() 方法，
 * 用来构造一个'期望数据'，表示实际数据是期望数据类型的一个任意的（any）实例，
 * 通常用在 toEqual()，toContain()，toHaveBeenCalledWith() 中
 */

describe('jasmine.namespace.jasmine.method.any.01', () => {
  it('01', () => {
    expect({}).not.toEqual(Object);
    expect({}).toEqual(jasmine.any(Object));

    expect(() => {}).toEqual(jasmine.any(Function));

    expect([]).toEqual(jasmine.any(Array));

    /*
     * 在 jasmine@2.x 中，下面的测试是通过的，
     * 在 jasmine@3.x 中，下面的测试将会失败
     */
    expect(null).toEqual(jasmine.any(Object));
  });

  it('02', () => {
    expect(['0']).toContain(jasmine.any(String));
  });

  it('03', () => {
    const obj = {
      foo(x?: string) {},
    };
    const spyFoo = spyOn(obj, 'foo');

    obj.foo('x');

    expect(spyFoo).not.toHaveBeenCalledWith('y');
    expect(spyFoo).toHaveBeenCalledWith(jasmine.any(String));
  });
});
