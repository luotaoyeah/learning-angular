/*
 * fail() 方法，
 * 显式地将一个 spec 标记为 fail
 */
describe('jasmine.global.fail.01', () => {
  it('01', () => {
    fail();

    pending('PENDING');
  });

  it('02', () => {
    fail('FOO');

    pending('PENDING');
  });

  it('03', () => {
    fail(new Error('BAR'));

    pending('PENDING');
  });
});
