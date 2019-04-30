/*
 * jasmine.createSpyObj() 方法，
 * 创建一个 SpyObj 对象，它的每一个属性都是一个 Spy 对象
 */

describe('jasmine.namespace.jasmine.method.createSpyObj.01', () => {
  it('01', () => {
    /*
     * 第二个参数，如果是一个 string array，
     * 则每个元素表示一个方法
     */
    const spyObj = jasmine.createSpyObj('obj', ['foo', 'bar', 'baz']);

    spyObj.bar();
    spyObj.baz('baz');

    expect(spyObj.foo).not.toHaveBeenCalled();
    expect(spyObj.bar).toHaveBeenCalledTimes(1);
    expect(spyObj.baz.calls.mostRecent().args).toEqual(
      jasmine.arrayContaining(['baz']),
    );
  });

  it('02', () => {
    /*
     * 第二个参数，如果是一个 object，
     * 则该对象的每一个属性名，表示一个方法，
     * 对应的属性值，表示该方法的返回值
     */
    const spyObj = jasmine.createSpyObj('obj', {
      x: 1,
      y: 2,
      z: 3,
    });

    expect(spyObj.x()).toEqual(1);
    expect(spyObj.y()).toEqual(2);
    expect(spyObj.z()).toEqual(3);

    expect(spyObj.x).toHaveBeenCalledTimes(1);
    expect(spyObj.y.calls.mostRecent().object).toBe(spyObj);
    expect(spyObj.z.calls.mostRecent().args).toEqual(
      jasmine.arrayWithExactContents([]),
    );
  });
});
