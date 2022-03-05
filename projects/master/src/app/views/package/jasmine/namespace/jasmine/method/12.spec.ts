/*
 * jasmine.stringMatching() 方法，
 * 构造一个'期望数据'，表示实际数据是一个 string，并且满足期望的匹配模式
 */

describe('jasmine.namespace.jasmine.method.stringMatching.01', () => {
  it('01', () => {
    expect('foo').toMatch(/\w*/i);
    expect('foo').not.toMatch(/\d{3}/);

    expect('foo').toEqual(jasmine.stringMatching(/\w*/i));
    expect('foo').not.toEqual(jasmine.stringMatching(/\d{3}/));
  });
});
