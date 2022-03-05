/*
 * beforeEach() 方法，
 * 在每个 it() 执行之前，都会执行一次
 */
describe('jasmine.global.beforeEach.01', () => {
  beforeEach(() => {
    console.log('beforeEach');
  });

  it('01', () => {
    console.log('01');
  });
  it('02', () => {
    console.log('02');
  });
});
