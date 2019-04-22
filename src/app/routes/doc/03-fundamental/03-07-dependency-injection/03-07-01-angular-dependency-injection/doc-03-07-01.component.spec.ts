import { Doc030701Component } from './doc-03-07-01.component';
import { Doc030701Service } from './service/doc-03-07-01.service';

describe('Doc030701Component', () => {
  let component: Doc030701Component;
  let doc030701Service: Doc030701Service;

  it('should init color correctly', () => {
    doc030701Service = {
      getColor(): string {
        return 'GREEN';
      },
    };

    /*
     * 有了 DI 之后，可以更加方便的对 component 进行测试，
     * 可以直接创建一个 mock service 来进行测试
     */
    component = new Doc030701Component(doc030701Service);

    component.ngOnInit();

    expect(component.color).toBe('GREEN');
  });
});
