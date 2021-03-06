import { Doc0504030102Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-03-component-test-basics/05-04-03-01-component-class-testing/05-04-03-01-02/doc-05-04-03-01-02.component';

describe('Doc0504030102Component', () => {
  let component: Doc0504030102Component;

  /*
   * 直接在 component class 中, 对 input 和 output 进行测试
   */
  it('should emit "myOutput" event when execute #handleClick()', () => {
    component = new Doc0504030102Component();

    component.myInput = 'foo';

    component.myOutput.subscribe((value: string) => {
      expect(value).toBe('FOO');
    });

    component.handleClick();
  });
});
