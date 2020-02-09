/*
 * pending() 方法，
 * 用来将一个 spec 标记为 pending 状态（尚未决定），
 * 即该 spec 中的测试结果会被忽略，不会影响到最终的测试结果，
 * pending() 方法的调用位置没有限制，可以在 spec 中的任意位置，但是通常放在 spec 里面的最前面
 */
describe('jasmine.global.pending.01', () => {
  it('01', () => {
    expect(0).toBeTruthy();
    expect(9).toBeFalsy();
    pending('PENDING');
  });

  it('02', () => {
    pending('PENDING');
    expect(0).toBeTruthy();
    expect(9).toBeFalsy();
  });

  it('03', () => {
    pending('PENDING');

    fail('FAIL');
  });
});
