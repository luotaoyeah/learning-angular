/*
 * expect() 方法返回的是一个 jasmine.Matchers 对象，
 * jasmine.Matchers 对象有很多方法，用来对数据进行检查，判断是否满足条件
 */
describe('jasmine.namespace.matchers.01', () => {
  /*
   * jasmine.NothingMatcher.nothing() 方法，
   * 表示没有期望，此时，expect() 方法参数中并没有需要检查的数据
   */
  it('nothing()', () => {
    expect().nothing();
  });

  /*
   * jasmine.Matchers.toBe() 方法，
   * 表示实际数据和期望数据严格相等（===）
   */
  it('toBe()', () => {
    const obj = {};
    expect(obj).toBe(obj);
  });

  /*
   * jasmine.Matchers.toBeCloseTo() 方法，
   * 判断两个数字，在某个精度范围内，是否是相等的，
   * 所谓在某个精度范围内，指的是超出精度范围的值直接忽略，
   * 比如对于 3.1415926，
   * 如果精度范围为 2，则作为 3.14
   * 如果精度范围为 3，则作为 3.141
   * 如果精度范围为 4，则作为 3.1415
   */
  it('toBeCloseTo()', () => {
    expect(3.14).toBeCloseTo(3.1415926, 2);
    expect(3.14).not.toBeCloseTo(3.1415926, 3);
  });
});
