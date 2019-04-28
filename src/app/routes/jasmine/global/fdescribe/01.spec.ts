/*
 * fdescribe() 方法，表示一个 focused describe()，
 * 当 fdescribe() 下面同时存在 fit() 和 it() 时，it() 不会执行
 */

fdescribe('01', () => {
  fit('fit', () => {
    expect(0).toBeFalsy();
  });
  it('it NOT', () => {
    expect(0).toBeTruthy();
  });

  describe('02', () => {
    fit('fit', () => {
      expect(0).toBeFalsy();
    });
    it('it NOT', () => {
      expect(0).toBeTruthy();
    });
  });

  fdescribe('03', () => {
    fit('fit', () => {
      expect(0).toBeFalsy();
    });
    it('it NOT', () => {
      expect(0).toBeTruthy();
    });
  });
});
