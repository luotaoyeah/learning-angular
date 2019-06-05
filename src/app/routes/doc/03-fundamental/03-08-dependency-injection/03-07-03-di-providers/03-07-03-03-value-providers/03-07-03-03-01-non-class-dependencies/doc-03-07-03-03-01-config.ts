import { InjectionToken } from '@angular/core';

interface IConfig {
  key: string;
  value: string;
}

/*
 * 使用 DI 系统，我们除了可以注入 service 之外，
 * 还可以注入其他类型的数据，比如 string/number/object/function 等等，
 * 需要注意的是，当我们注入一个 service 时，通常就是使用这个 service class 作为它的 token，
 * 但是对于一个 object 来说，它没有对应的 service class，那么用什么作为它的 token 呢？
 * angular 定义了一个 InjectionToken 类，专门用来创建一个 token
 */
const CONFIG_01: IConfig = {
  key: 'FOO',
  value: 'BAR',
};

/*
 * InjectionToken 的泛型参数，用来指定它对应的依赖实例的类型
 */
const CONFIG_TOKEN_01: InjectionToken<IConfig> = new InjectionToken<IConfig>(
  'config.01',
);

const CONFIG_TOKEN_02: InjectionToken<IConfig> = new InjectionToken<IConfig>(
  'config.02',
  {
    factory: () => ({
      key: 'FOO',
      value: 'BAZ',
    }),
  },
);

export { IConfig, CONFIG_01, CONFIG_TOKEN_01, CONFIG_TOKEN_02 };
