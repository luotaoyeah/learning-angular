import { Doc05070301Component } from './doc-05-07-03-01.component';

describe('Doc05070301Component', () => {
  let component: Doc05070301Component;

  /*
   * 如果只是测试一个没有 DI 的 component class，就跟测试 service 类似，
   * 可以直接创建 component 实例，然后对它的属性和方法进行测试
   */
  it('#click() should toggle #isOn', () => {
    component = new Doc05070301Component();

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
    component = new Doc05070301Component();

    expect(component.message).toMatch(/is off/i);

    component.click();
    expect(component.message).toMatch(/is on/i);
  });
});
