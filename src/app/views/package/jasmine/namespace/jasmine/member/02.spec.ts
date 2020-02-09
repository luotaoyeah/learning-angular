describe('jasmine.namespace.jasmine.member.02', () => {
  const MAX_PRETTY_PRINT_DEPTH = jasmine.MAX_PRETTY_PRINT_DEPTH;

  afterEach(() => {
    jasmine.MAX_PRETTY_PRINT_DEPTH = MAX_PRETTY_PRINT_DEPTH;
  });

  /*
   * jasmine.MAX_PRETTY_PRINT_DEPTH 属性，
   * 表示 jasmine 在打印一个 object 时，最大的嵌套层数，默认值为 8，
   * 如果对象的嵌套层数超过了这个值，则超过的部分会简单地显示为 "Object"
   */
  it('01', () => {
    expect(jasmine.MAX_PRETTY_PRINT_DEPTH).toEqual(8);
  });

  it('02', () => {
    jasmine.MAX_PRETTY_PRINT_DEPTH = 1;

    expect({ a: { b: { c: { d: 'd' } } } }).toBeFalsy();

    pending('PENDING');
  });

  it('03', () => {
    jasmine.MAX_PRETTY_PRINT_DEPTH = 2;

    expect({ a: { b: { c: { d: 'd' } } } }).toBeFalsy();

    pending('PENDING');
  });

  it('04', () => {
    jasmine.MAX_PRETTY_PRINT_DEPTH = 3;

    expect({ a: { b: { c: { d: 'd' } } } }).toBeFalsy();

    pending('PENDING');
  });
});
