/*
 * jasmine.addCustomEqualityTester() 方法，
 * 用来添加自定义的相等性比较方法，用来决定 jasmine.Matchers.toEqual() 方法的返回值，
 * 默认情况下，toEqual() 方法使用的是 deep equality comparison 方式进行相等性比较，
 * 如果使用 addCustomEqualityTester() 添加了自定义的比较方法，
 * 则 toEqual() 方法首先会调用自定义的比较方法，
 *     如果自定义比较方法返回 true/false，则比较结束，返回结果
 *     如果自定义比较方法返回 undefined，则继续调用 toEqual() 方法的默认比较方法进行比较
 */
describe('jasmine.namespace.jasmine.method.addCustomEqualityTester.01', () => {
  // tslint:disable-next-line:no-any
  const foo: any = { a: 'a', b: 'b' };
  // tslint:disable-next-line:no-any
  const bar: any = { a: 'a', c: 'c' };

  it('01', () => {
    expect(foo).not.toEqual(bar);
  });

  it('02', () => {
    // tslint:disable-next-line:no-any
    jasmine.addCustomEqualityTester((x: any, y: any) => {
      console.log('CUSTOM EQUALITY TESTER');

      if (x.a && y.a && x.a === y.a) {
        return true;
      }

      return undefined;
    });

    expect(foo).toEqual(bar);
  });
});
