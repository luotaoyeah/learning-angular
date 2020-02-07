/*
 * jasmine.addCustomEqualityTester() 方法，
 * 用来添加自定义的相等性比较方法，用来决定 jasmine.Matchers.toEqual() 方法的返回值，
 * 默认情况下，toEqual() 方法使用的是 deep equality comparison 方式进行相等性比较，
 * 如果使用 addCustomEqualityTester() 添加了自定义的比较方法，
 * 则 toEqual() 方法首先会依次调用这些自定义的比较方法，
 *     如果自定义比较方法返回 true/false，则比较结束，返回结果
 *     如果自定义比较方法返回 undefined，则继续调用 toEqual() 的默认比较方法进行比较
 */

describe('jasmine.namespace.jasmine.method.addCustomEqualityTester.01', () => {
  const foo: SafeAny = { a: 'a', b: 'b' };

  const bar: SafeAny = { a: 'a', c: 'c' };

  it('01', () => {
    expect(foo).not.toEqual(bar);
  });

  it('02', () => {
    jasmine.addCustomEqualityTester((x: SafeAny, y: SafeAny) => {
      console.log('CUSTOM EQUALITY TESTER');

      if (x.a && y.a && x.a === y.a) {
        return true;
      }

      return undefined;
    });

    expect(foo).toEqual(bar);
  });

  it('03', () => {
    let result = '';

    /*
     * 如果添加了多个自定义比较方法，
     * 如果上一个自定义比较方法返回的是 undefined，则会执行下一个自定义方法
     */

    jasmine.addCustomEqualityTester((x: SafeAny, y: SafeAny) => {
      if (x.a && y.a && x.a === y.a) {
        return true;
      }

      result += 'FOO';

      return undefined;
    });

    jasmine.addCustomEqualityTester((x: SafeAny, y: SafeAny) => {
      if (x.b && y.b && x.b === y.b) {
        result += 'BAR';
        return true;
      }

      return undefined;
    });

    expect({ b: 'b', c: 'c' }).toEqual({ b: 'b', c: 'C' });
    expect(result).toBe('FOOBAR');
  });
});
