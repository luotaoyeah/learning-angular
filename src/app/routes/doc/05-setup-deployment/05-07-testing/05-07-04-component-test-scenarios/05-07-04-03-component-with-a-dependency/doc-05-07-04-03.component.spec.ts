import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05070403Component } from './doc-05-07-04-03.component';
import { Doc05070403Service } from './service/doc-05-07-04-03.service';

/*
 * 在测试 component 时，如果 component 依赖了其他的 service，
 * 通常不应该注入真实的 service，我们应该使用 mock service 来进行测试，
 * 因为我们的目的是测试 component，而不是测试 service，
 * 因此使用 mock service 更加容易测试
 */
const MockDoc05070403Service: Partial<Doc05070403Service> = {
  name: 'FOO',
};

describe('Doc05070403Component', () => {
  let fixture: ComponentFixture<Doc05070403Component>;
  let component: Doc05070403Component;
  let pEl: HTMLParagraphElement | null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc05070403Component],
      /*
       * 通过 providers 注册 mock service
       */
      providers: [
        {
          provide: Doc05070403Service,
          useValue: MockDoc05070403Service,
        },
      ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05070403Component);
    component = fixture.componentInstance;
    pEl = (fixture.debugElement.nativeElement as HTMLElement).querySelector(
      'p',
    );
  });

  it('should working', () => {
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
     * ComponentFixture.debugElement.injector 表示的是 component injector，
     * 从这里面可以获取这些 mock service
     */
    const doc05070403Service = fixture.debugElement.injector.get(
      Doc05070403Service,
    );
    doc05070403Service.name = 'BAZ';

    if (pEl) {
      fixture.detectChanges();
      expect(pEl.textContent).toEqual('BAZBAR');
    }
  });
});
