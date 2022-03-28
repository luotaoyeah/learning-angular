/*
 * expect() 方法，
 * 创建一个 jasmine.Matchers 对象，用来检查实际数据是否满足期望条件
 */
describe('jasmine.global.expect.01', () => {
  it('01', () => {
    expect(0).toBeFalsy();
    expect(0).not.toBeTruthy();
    expect([1, 2, 3]).toContain(1);
  });
});
