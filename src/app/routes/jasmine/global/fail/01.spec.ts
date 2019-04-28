/*
 * fail() 方法，
 * 显式地将一个 spec 标记为 fail
 */
describe('jasmine.global.fail.01', () => {
  it('01', () => {
    fail('FOO');
  });

  it('02', () => {
    fail(new Error('BAR'));
  });
});
