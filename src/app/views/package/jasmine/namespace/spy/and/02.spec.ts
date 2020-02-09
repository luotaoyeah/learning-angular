/*
 * jasmine.SpyAnd.callThrough() 方法，
 */

describe('jasmine.namespace.spy.and.callThrough.01', () => {
  // @ts-ignore
  const obj = {
    foo() {
      console.log('REAL FN');
      return 'FOO';
    },
  };

  it('01', () => {
    const spyFoo = spyOn(obj, 'foo');

    /*
     * 默认情况下，当调用 spy 对象时，是不会去调用'实际函数'的，
     * 这个调用过程是被拦截了的
     */
    spyFoo();

    expect(spyFoo).toHaveBeenCalledTimes(1);
  });

  it('02', () => {
    const spyFoo = spyOn(obj, 'foo');

    /*
     * 如果执行了 jasmine.SpyAnd.callThrough() 方法，
     * 则在调用 spy 对象时，会去调用'实际函数'，
     * 但是对这个调用过程的监听依然有效
     *
     * callFake() 和 callThrough() 有一些类似的地方：
     *     callFake() 对调用过程进行了拦截，将所有调用委托给'委托函数'
     *     callThrough() 对调用过程进行了拦截，将所有调用委托给'实际函数'
     *
     */
    spyFoo.and.callThrough();

    spyFoo();

    expect(spyFoo).toHaveBeenCalledTimes(1);
    expect(spyFoo.calls.mostRecent().returnValue).toEqual('FOO');
  });
});
