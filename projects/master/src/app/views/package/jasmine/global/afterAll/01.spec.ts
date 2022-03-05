/*
 * afterAll() 方法，在所有 it() 执行之后执行一次
 */
describe('jasmine.global.afterAll.01', () => {
  it('01', () => {
    console.log('01');
  });
  it('02', () => {
    console.log('02');
  });

  afterAll(() => {
    console.log('afterAll');
  });
});
