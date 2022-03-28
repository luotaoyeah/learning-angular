/*
 * afterEach() 方法，
 * 在每个 it() 执行之后，都会执行一次
 */
describe('jasmine.global.afterEach.01', () => {
  afterEach(() => {
    console.log('afterEach');
  });

  it('01', () => {
    console.log('01');
  });
  it('02', () => {
    console.log('02');
  });
});
