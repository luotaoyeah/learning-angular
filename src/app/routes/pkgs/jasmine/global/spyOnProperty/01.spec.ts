/*
 * spyOnProperty() 方法，
 * 对某个 object 的某个 access property 进行监视，返回被监视的 property
 */

describe('jasmine.global.spyOnProperty.01', () => {
  it('01', () => {
    const obj: { name?: string } = {};
    Object.defineProperty(obj, 'name', {
      get(): string {
        return 'FOO';
      },
    });
    const spy: Spy = spyOnProperty(obj, 'name', 'get');

    spy.and.returnValue('BAR');

    expect(obj.name).toEqual('BAR');
  });

  it('02', () => {
    const obj: { name: string } = {
      get name() {
        return 'FOO';
      },
    };

    const spy = spyOnProperty(obj, 'name');
    spy.and.returnValue('BAZ');

    expect(obj.name).toEqual('BAZ');
  });
});
