import { Doc0507030102Component } from './doc-05-07-03-01-02.component';

describe('Doc0507030102Component', () => {
  let component: Doc0507030102Component;

  it('should raise myOutput event when #click()', () => {
    component = new Doc0507030102Component();

    component.myInput = 'foobar';

    component.myOutput.subscribe((value: string) => {
      expect(value).toBe('FOOBAR');
    });

    component.click();
  });
});
