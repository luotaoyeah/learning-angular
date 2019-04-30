/*
 * jasmine.clock() 方法，
 * 获取当前环境下的 clock 对象
 */

describe('jasmine.namespace.jasmine.method.clock.01', () => {
  it('01', () => {
    expect(jasmine.clock()).toEqual(jasmine.anything());
    expect(jasmine.clock()).toBeTruthy();
  });
});
