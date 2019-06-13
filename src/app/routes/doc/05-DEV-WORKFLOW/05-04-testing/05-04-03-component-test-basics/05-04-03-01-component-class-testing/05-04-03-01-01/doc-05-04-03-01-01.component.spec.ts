import { Doc0504030101Component } from './doc-05-04-03-01-01.component';

describe('Doc0504030101Component', () => {
  let component: Doc0504030101Component;

  /*
   * 如果只是测试一个没有 DI 的 component class，就跟测试 service 类似，
   * 可以直接创建 component 实例，然后对它的属性和方法进行测试
   */
  it('#click() should toggle #isOn', () => {
    component = new Doc0504030101Component();

    expect(component.isOn).toBe(false, 'off at first');

    /*
     * directly invoke component's methods
     */
    component.click();
    expect(component.isOn).toBe(true, 'on after click()');

    component.click();
    expect(component.isOn).toBe(false, 'off after second click()');
  });

  it('#message should be "is on" after #click()', () => {
    component = new Doc0504030101Component();

    expect(component.message).toMatch(/is off/i);

    component.click();
    expect(component.message).toMatch(/is on/i);
  });
});