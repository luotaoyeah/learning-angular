/*
 * beforeAll() 方法，在所有 it() 执行之前执行一次
 */
describe('jasmine.global.beforeAll.01', () => {
  beforeAll(() => {
    console.log('beforeAll');
  });

  it('01', () => {
    console.log('01');
  });
  it('02', () => {
    console.log('02');
  });
});
