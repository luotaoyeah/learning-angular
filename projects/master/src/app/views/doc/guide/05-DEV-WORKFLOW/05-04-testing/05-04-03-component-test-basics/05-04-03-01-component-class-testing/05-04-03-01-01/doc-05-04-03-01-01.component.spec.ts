import { Doc0504030101Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-03-component-test-basics/05-04-03-01-component-class-testing/05-04-03-01-01/doc-05-04-03-01-01.component';

describe('Doc0504030101Component', () => {
  let component: Doc0504030101Component;

  /*
   * 如果只是测试一个比较简单的 component class, 就跟测试 service 类似,
   * 可以直接创建 component 实例, 然后对它的属性和方法进行测试
   */
  it('should toggle #isOn when execude #handleClick()', () => {
    component = new Doc0504030101Component();

    expect(component.isOn).toBe(false, 'off at first');

    component.handleClick();
    expect(component.isOn).toBe(true, 'on after click');

    component.handleClick();
    expect(component.isOn).toBe(false, 'off after second click');
  });

  it('should change #message to "ON" after click', () => {
    component = new Doc0504030101Component();

    expect(component.message).toMatch(/off/i);

    component.handleClick();
    expect(component.message).toEqual('ON');
  });
});
