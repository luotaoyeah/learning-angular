import { InjectionToken } from '@angular/core';

/*
 * InjectionToken 的类型参数用来指定对应的 provider 返回的实例的类型
 */
const TOKEN_01 = new InjectionToken<string>('token.01');

/*
 * 如果声明了 factory 选项，
 * 表示将这个 token 注册到 root injector 中，并使用该 factory 作为 provider，
 * 也可以同时使用 providedIn 将这个 token 注册到其他的 injector 中，
 * 即如果只声明了 factory，没有声明 providedIn，则 providedIn 的值默认为 'root'
 */
const TOKEN_02 = new InjectionToken<string>('token.02', {
  factory() {
    return 'FOO';
  },
});

export { TOKEN_01, TOKEN_02 };
