/*
 * jasmine.getEnv() 方法，
 * 获取当前的 env 对象
 */

describe('jasmine.namespace.jasmine.method.getEnv.01', () => {
  it('01', () => {
    const env = jasmine.getEnv();

    expect(env).toBeDefined();
  });
});
