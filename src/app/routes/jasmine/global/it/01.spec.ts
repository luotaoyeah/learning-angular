/*
 * it() 方法，
 * 用来创建一个测试用例（spec），
 * spec 中通常应该包含一个或者多个 expect()，如果它们全部通过，则该 spec 通过，
 * 否则，只要有一个 expect() 失败，这个 spec 就失败了
 */
describe('jasmine.global.it.01', () => {
  it('01', () => {
    expect(0).toBeFalsy();
    expect(9).toBeTruthy();
    expect(undefined).toBeNull('NOT NULL');

    pending('PENDING');
  });
});
