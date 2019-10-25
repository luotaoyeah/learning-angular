import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05040403Component } from './doc-05-04-04-03.component';
import { Doc05040403Service } from './services/doc-05-04-04-03.service';

/*
 * 在测试 component 的时候, 如果 component 依赖了其他的 service,
 * 通常不应该注入真实的 service, 而应该使用 mock service 来进行测试,
 * 因为我们的目的是测试 component, 而不是测试 service, 并且使用 mock service 更加容易测试
 */

const Doc05040403ServiceStub: Pick<Doc05040403Service, 'name'> = {
  name: 'FOO',
};

describe('Doc05040403Component', () => {
  let fixture: ComponentFixture<Doc05040403Component>;
  let component: Doc05040403Component;
  let pEl: HTMLParagraphElement | null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc05040403Component],
      /*
       * 通过 providers 注册 mock service
       */
      providers: [
        {
          provide: Doc05040403Service,
          useValue: Doc05040403ServiceStub,
        },
      ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05040403Component);
    component = fixture.componentInstance;
    pEl = (fixture.nativeElement as HTMLElement).querySelector('p');
  });

  it('should created', () => {
    expect(component).toBeTruthy();
  });

  it('should display message', () => {
    expect(pEl).toBeTruthy();

    if (pEl) {
      fixture.detectChanges();
      expect(pEl.textContent).toEqual('FOOBAR');
    }
  });

  it('should display changed message', () => {
    /*
     * ComponentFixture.debugElement.injector 表示的是 component injector,
     * 从这里面可以获取这些 mock service
     */

    const doc05070403Service = fixture.debugElement.injector.get(Doc05040403Service);
    doc05070403Service.name = 'BAZ';

    if (pEl) {
      fixture.detectChanges();
      expect(pEl.textContent).toEqual('BAZBAR');
    }
  });

  /*
   * mock service 在被注册到 DI 之后, 我们应该通过 injector 来获取注入的 service,
   * 而不能直接使用这个 mock service 对象, 它们不是一个东西
   */
  it('stub service and the injected service should not be the same', () => {
    const injectedService = fixture.debugElement.injector.get(Doc05040403Service);

    // FIXME 为什么他们是同一个对象?
    expect(injectedService).toBe(Doc05040403ServiceStub);
  });
});
