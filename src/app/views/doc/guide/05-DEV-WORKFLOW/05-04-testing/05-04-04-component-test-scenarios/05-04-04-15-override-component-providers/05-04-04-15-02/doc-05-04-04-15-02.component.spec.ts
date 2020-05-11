import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Doc0504041502Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-15-override-component-providers/05-04-04-15-02/doc-05-04-04-15-02.component';
import { Doc05040415Service } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-15-override-component-providers/services/doc-05-04-04-15.service';

describe('Doc0504041502Component', () => {
  let fixture: ComponentFixture<Doc0504041502Component>;
  let component: Doc0504041502Component;
  let Doc05040415ServiceStub: jasmine.SpyObj<Doc05040415Service>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Doc0504041502Component],
      })
        /*
         * 使用 TestBed.overrideComponent() 方法, 可以修改某个 component 的 component metadata,
         * 包括添加属性,删除属性,修改属性
         */
        .overrideComponent(Doc0504041502Component, {
          set: {
            providers: [
              {
                provide: Doc05040415Service,
                useValue: jasmine.createSpyObj<Doc05040415Service>('Doc05040415Service', ['foo']),
              },
            ],
          },
        })
        .compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0504041502Component);
    component = fixture.componentInstance;
    Doc05040415ServiceStub = fixture.debugElement.injector.get(Doc05040415Service) as jasmine.SpyObj<Doc05040415Service>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should override Doc05040415Service', () => {
    Doc05040415ServiceStub.foo.and.returnValue('BAR');

    fixture.detectChanges();

    expect(component.foo).toEqual('BAR');
    expect(Doc05040415ServiceStub.foo).toHaveBeenCalledTimes(1);
  });
});
