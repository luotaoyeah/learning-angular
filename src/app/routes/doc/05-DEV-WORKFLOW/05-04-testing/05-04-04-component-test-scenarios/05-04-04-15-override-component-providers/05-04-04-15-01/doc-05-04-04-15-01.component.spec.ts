import { Doc0504041501Component } from './doc-05-04-04-15-01.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05040415Service } from '../service/doc-05-04-04-15.service';

describe('Doc0504041501Component', () => {
  let fixture: ComponentFixture<Doc0504041501Component>;
  let component: Doc0504041501Component;

  const Doc05040415ServiceStub: jasmine.SpyObj<
    Doc05040415Service
  > = jasmine.createSpyObj('Doc05040415Service', ['foo']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc0504041501Component],
      /*
       * 通过 TestModuleMetadata.providers 注册的 service，是注册到了 TestingModule 的 injector 中去，
       * 而通过 @Component.providers 注册的 service 是注册到了 component injector 中去，
       * component injector 是 TestingModule injector 的下级，
       * 因此通过 TestModuleMetadata.providers 注册的 service 不能覆盖 component injector 中的 service，
       * 如下，在 TestingModule 中注册的 Doc05040415Service 并不会被 Doc0504041501Component 使用，
       * Doc0504041501Component 使用的是它自己的 injector 中的 Doc05040415Service
       */
      providers: [
        {
          provide: Doc05040415Service,
          useValue: Doc05040415ServiceStub,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0504041501Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not override Doc05040415Service', () => {
    Doc05040415ServiceStub.foo.and.returnValue('BAR');

    fixture.detectChanges();

    expect(component.foo).not.toEqual('BAR');
    expect(Doc05040415ServiceStub.foo).not.toHaveBeenCalledTimes(1);

    expect(component.foo).toEqual('FOO');
  });
});
