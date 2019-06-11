import { Doc0504030102Component } from './doc-05-04-03-01-02.component';

describe('Doc0504030102Component', () => {
  let component: Doc0504030102Component;

  it('should raise myOutput event when #click()', () => {
    component = new Doc0504030102Component();

    component.myInput = 'foobar';

    component.myOutput.subscribe((value: string) => {
      expect(value).toBe('FOOBAR');
    });

    component.click();
  });
});
