/*
 * describe() 方法，用来创建一组测试用例，俗称一个套件（suite）
 */
describe('jasmine.global.describe.01', () => {
  it('01', () => {});

  /*
   * describe() 可以嵌套，用来组成一个树形的套件树
   */
  describe('01', () => {
    it('01', () => {});
  });
});
