/*
 * expect() 方法返回的是一个 jasmine.Matchers 对象，
 * jasmine.Matchers 对象有很多方法，用来对数据进行检查，判断是否满足条件
 */

describe('jasmine.namespace.matchers.01', () => {
  /*
   * jasmine.NothingMatcher.nothing() 方法，
   * 表示没有期望，此时，expect() 方法参数中并没有需要检查的数据
   */
  it('nothing()', () => {
    expect().nothing();
  });

  /*
   * jasmine.Matchers.toBe() 方法，
   * 表示实际数据和期望数据严格相等（===）
   */
  it('toBe()', () => {
    const obj = {};
    expect(obj).toBe(obj);
  });

  /*
   * jasmine.Matchers.toBeCloseTo() 方法，
   * 判断两个数字，在某个精度范围内，是否是相等的，
   * 所谓在某个精度范围内，指的是超出精度范围的值直接忽略，
   * 比如对于 3.1415926，
   * 如果精度范围为 2，则作为 3.14
   * 如果精度范围为 3，则作为 3.141
   * 如果精度范围为 4，则作为 3.1415
   */
  it('toBeCloseTo()', () => {
    expect(3.14).toBeCloseTo(3.1415926, 2);
    expect(3.14).not.toBeCloseTo(3.1415926, 3);
  });

  /*
   * jasmine.Matchers.toBeDefined() 方法，
   * 判断实际数据是否**不**为 undefined
   */
  it('toBeDefined()', () => {
    expect(0).toBeDefined();
    expect(null).toBeDefined();
    expect(undefined).not.toBeDefined();
  });

  /*
   * jasmine.Matchers.toBeFalsy() 方法，
   * 判断实际数据是否是一个 falsy 数据，即 !! 结果为 false
   */
  it('toBeFalsy()', () => {
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect('').toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(NaN).toBeFalsy();
  });

  /*
   * jasmine.Matchers.toBeGreaterThan() 方法，
   * 判断实际数据是否 > 期望数据
   */
  it('toBeGreaterThan()', () => {
    expect(9).toBeGreaterThan(8);
    expect(9).not.toBeGreaterThan(9);
  });

  /*
   * jasmine.Matchers.toBeGreaterThanOrEqual() 方法，
   * 判断实际数据是否 >= 期望数据
   */
  it('toBeGreaterThanOrEqual()', () => {
    expect(9).toBeGreaterThanOrEqual(9);
    expect(9).not.toBeGreaterThanOrEqual(99);
  });

  /*
   * jasmine.Matchers.toBeLessThan() 方法，
   * 判断实际数据是否 < 期望数据
   */
  it('toBeLessThan()', () => {
    expect(9).toBeLessThan(99);
    expect(9).not.toBeLessThan(9);
  });

  /*
   * jasmine.Matchers.toBeLessThanOrEqual() 方法，
   * 判断实际数据是否 <= 期望数据
   */
  it('toBeLessThanOrEqual()', () => {
    expect(9).toBeLessThanOrEqual(9);
    expect(99).not.toBeLessThanOrEqual(9);
  });

  /*
   * jasmine.Matchers.toBeNaN() 方法，
   * 判断实际数据是否是一个 Number.NaN
   */
  it('toBeNaN()', () => {
    expect(Number.NaN).toBeNaN();
    // @ts-ignore
    expect(0 / 0).toBeNaN();
    // @ts-ignore: TS2363
    expect(0 * 'x').toBeNaN();
  });

  /*
   * jasmine.Matchers.toBeNull() 方法，
   * 判断实际数据是否 === null
   */
  it('toBeNull()', () => {
    expect(null).toBeNull();
    expect(undefined).not.toBeNull();
  });

  /*
   * jasmine.Matchers.toBeTruthy() 方法，
   * 判断实际数据是否是一个 truthy 数据，即 !! 结果为 true
   */
  it('toBeTruthy()', () => {
    expect(9).toBeTruthy();
    expect(0).not.toBeTruthy();
    expect(null).not.toBeTruthy();
  });

  /*
   * jasmine.Matchers.toBeUndefined() 方法，
   * 判断实际数据是否 === undefined
   */
  it('toBeUndefined()', () => {
    expect(undefined).toBeUndefined();
    expect(null).not.toBeUndefined();
  });

  /*
   * jasmine.Matchers.toContain() 方法，
   * jasmine.ArrayLikeMatchers.toContain() 方法，
   * 判断实际数据是否包含某个元素，
   * 实际数据的类型可以是 string，array，array-like object
   */
  it('toContain()', () => {
    expect('foo').toContain('o');
    expect('foo').not.toContain('x');
    expect([1, 2, 3]).toContain(3);
    expect([1, 2, 3]).not.toContain(9);
  });

  /*
   * jasmine.Matchers.toEqual() 方法，
   * 判断实际数据是否 等于 期望数据，
   * 这儿的比较方式，使用的时 deep equality comparison
   */
  it('toEqual()', () => {
    expect(0).toEqual(0);
    expect({ x: '0' }).toEqual({ x: '0' });

    expect(Number.NaN).toEqual(Number.NaN);
    expect(Number.NaN).not.toBe(Number.NaN);
  });

  /*
   * jasmine.Matchers.toHaveBeenCalled() 方法，
   * 判断某个 spy 是否已经被调用了
   */
  it('toHaveBeenCalled()', () => {
    const obj = {
      foo(): string {
        return 'FOO';
      },
    };

    const spyObj: Spy = spyOn(obj, 'foo');
    expect(spyObj).not.toHaveBeenCalled();

    spyObj.and.returnValue('BAR');
    expect(obj.foo()).toEqual('BAR');

    expect(spyObj).toHaveBeenCalled();
  });

  /*
   * jasmine.Matchers.toHaveBeenCalledBefore() 方法，
   * 判断某个 spy 是否在另一个 spy 之前调用
   */
  it('toHaveBeenCalledBefore()', () => {
    const obj = {
      foo(): string {
        return 'FOO';
      },
      bar(): string {
        return 'BAR';
      },
      baz(): string {
        return 'BAZ';
      },
    };

    const spyFoo = spyOn(obj, 'foo');
    const spyBar = spyOn(obj, 'bar');
    const spyBaz = spyOn(obj, 'baz');

    spyFoo.and.returnValue('FOO01');
    spyBar.and.returnValue('BAR01');
    spyBaz.and.returnValue('BAZ01');

    obj.foo();
    obj.bar();
    obj.baz();

    expect(spyFoo).toHaveBeenCalledBefore(spyBar);
    expect(spyBaz).not.toHaveBeenCalledBefore(spyBar);
  });

  /*
   * jasmine.Matchers.toHaveBeenCalledTimes() 方法，
   * 判断某个 spy 是否调用了指定的次数
   */
  it('toHaveBeenCalledTimes()', () => {
    const obj = {
      foo(): string {
        return 'FOO';
      },
    };

    const spyFoo = spyOn(obj, 'foo');
    expect(spyFoo).toHaveBeenCalledTimes(0);

    obj.foo();
    expect(spyFoo).toHaveBeenCalledTimes(1);

    obj.foo();
    expect(spyFoo).toHaveBeenCalledTimes(2);
  });

  /*
   * jasmine.Matchers.toHaveBeenCalledWith() 方法，
   * 判断某个 spy 是否使用了指定的参数进行调用
   */
  it('toHaveBeenCalledWith()', () => {
    const obj = {
      foo(x?: string): string {
        return 'FOO';
      },
    };

    const spyFoo = spyOn(obj, 'foo');

    obj.foo();
    expect(spyFoo).toHaveBeenCalledWith();

    obj.foo('x');
    expect(spyFoo).toHaveBeenCalledWith('x');
    expect(spyFoo).not.toHaveBeenCalledWith('y');
  });

  /*
   * jasmine.Matchers.toMatch() 方法，
   * 判断实际数据是否匹配指定的正则表达式
   */
  it('toMatch()', () => {
    /*
     * 期望数据可以是一个 RegExp
     */
    expect('jasmine').not.toMatch(/JAS/);
    expect('jasmine').toMatch(/JAS/i);
    expect(999).toMatch(/\d{3}/);

    /*
     * 期望数据可以是一个 string
     */
    expect('jasmine').toMatch('jas');
  });

  /*
   * jasmine.Matchers.toThrow() 方法，
   * 判断某个 function 是否会抛出异常，可以是任意的异常，也可以是只当的异常
   */
  it('toThrow()', () => {
    expect(() => {
      throw new Error('FOO');
    }).toThrow();

    expect(() => {
      // tslint:disable-next-line:no-string-throw
      throw 'FOO';
    }).toThrow('FOO');

    expect(() => {
      // tslint:disable-next-line:no-string-throw
      throw 'FOO';
    }).not.toThrow('BAR');

    const error = new Error('FOO');
    expect(() => {
      throw error;
    }).toThrow(error);
  });

  /*
   * jasmine.Matchers.toThrowError() 方法，
   * 判断某个 function 是否抛出了一个 Error 对象，
   * 或者是否抛出了一个指定类型的 Error 对象（自定义错误类型）
   */
  it('toThrowError()', () => {
    /*
     * 抛出的必须是一个 Error 对象
     */
    expect(() => {
      // tslint:disable-next-line:no-string-throw
      throw 'FOO';
    }).not.toThrowError();

    expect(() => {
      throw new Error('FOO');
    }).toThrowError(Error);

    /*
     * 判断抛出的错误消息是否包含指定的内容
     */
    expect(() => {
      throw new Error('FOO');
    }).not.toThrowError('BAR');
  });
});
