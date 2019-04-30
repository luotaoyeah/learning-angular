describe('jasmine.namespace.jasmine.member.01', () => {
  /*
   * jasmine.DEFAULT_TIMEOUT_INTERVAL 属性，
   * 表示 async spec 的默认超时时间，默认值为 5000 毫秒，
   * 如果一个 async spec 在这个时间之内没有返回，则认为它失败了
   */

  beforeAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
  });

  it('01', () => {
    expect(jasmine.DEFAULT_TIMEOUT_INTERVAL).toEqual(1000);
  });

  it('02', () => {
    return new Promise((resolve: () => void) => {
      setTimeout(() => {
        resolve();
      }, 999);
    });
  });
});
