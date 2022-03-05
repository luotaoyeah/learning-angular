/*
/!*
 * jasmine.addMatchers() 方法，
 * 用来添加自定义的 Matchers 方法
 *!/
import CustomEqualityTester = jasmine.CustomEqualityTester;
import MatchersUtil = jasmine.MatchersUtil;
import CustomMatcher = jasmine.CustomMatcher;
import CustomMatcherResult = jasmine.CustomMatcherResult;
import { SafeAny } from '@src/typings';

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace jasmine {
  interface Matchers<T> {
    toBeBar(): boolean;

    toBeFoo(): boolean;
  }
}

describe('jasmine.namespace.jasmine.method.addMatchers.01', () => {
  it('01', () => {
    /!*
     * jasmine.addMatchers() 方法参数是一个 CustomMatcherFactories 对象，
     * 属性名表示 Matchers 方法的名称，属性值是一个 CustomMatcherFactory 对象
     *!/
    jasmine.addMatchers({
      /!*
       * 工厂方法（CustomMatcherFactory）接收两个参数，
       * 返回一个 CustomMatcher 对象
       *!/
      toBeFoo(util: MatchersUtil, customEqualityTesters: ReadonlyArray<CustomEqualityTester>): CustomMatcher {
        return {
          compare(actual: SafeAny, expected?: SafeAny): CustomMatcherResult {
            const pass = 'foo' in actual;

            /!*
             * jasmine.CustomMatcherResult.pass 属性，
             * 表示测试是否通过，
             *     默认情况下，pass: true 表示测试通过，
             *     如果使用了 jasmine.Matchers.not，则 pass: false 表示测试通过
             *!/

            return {
              pass,
              message: pass
                ? `Expect ${JSON.stringify(actual)} NOT to be FOO`
                : `Expect ${JSON.stringify(actual)} to be FOO`,
            };
          },
        };
      },
    });

    expect({ foo: 'foo' }).toBeFoo();
    expect({}).toBeFoo();
    expect({ foo: 'foo' }).not.toBeFoo();

    pending('PENDING');
  });

  it('02', () => {
    jasmine.addMatchers({
      toBeBar(util: MatchersUtil, customEqualityTesters: ReadonlyArray<CustomEqualityTester>): CustomMatcher {
        return {
          compare(): CustomMatcherResult {
            return { pass: true };
          },
          /!*
           * 如果没有定义 jasmine.CustomMatcher.negativeCompare() 方法，
           * 则在使用 .not 时，会调用 compare() 方法，并将结果取反
           *
           * 如果定义了 jasmine.CustomMatcher.negativeCompare() 方法，
           * 则在使用 .not 时，会直接调用 negativeCompare() 方法
           *!/

          negativeCompare(actual: SafeAny): CustomMatcherResult {
            console.log('toBeBar.negativeCompare()');
            const pass = !('bar' in actual);
            return {
              pass,
              message: `Expect ${JSON.stringify(actual)} NOT to be BAR`,
            };
          },
        };
      },
    });

    // @ts-ignore
    expect({}).not.toBeBar();
  });
});
*/
