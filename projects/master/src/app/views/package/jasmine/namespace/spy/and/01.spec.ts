/*
 * jasmine.SpyAnd.callFake() 方法，
 * 给 spy 对象设置一个委托函数，所有对 spy 的调用都会委托给这个函数
 */

describe('jasmine.namespace.spy.and.callFake.01', () => {
  it('01', () => {
    const spyObj = jasmine.createSpyObj('obj', ['foo']);
    spyObj.foo();
    expect(spyObj.foo).toHaveBeenCalledTimes(1);
  });

  it('02', () => {
    /*
     * jasmine.SpyAnd.callFake() 方法，接收一个函数参数
     */
    const spyObj = jasmine.createSpyObj('obj', ['foo']);
    spyObj.foo.and.callFake(() => {
      console.log('FAKE FN');
      return 'FOO';
    });

    expect(spyObj.foo).toHaveBeenCalledTimes(0);

    /*
     * 当我们调用 spy 对象时，
     * 实际上调用的就是上面通过 callFake() 方法设置的委托函数
     */
    spyObj.foo();
    expect(spyObj.foo).toHaveBeenCalledTimes(1);

    expect(spyObj.foo.calls.mostRecent().returnValue).toEqual('FOO');
  });
});
