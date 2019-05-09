import { Doc0507041501Component } from './doc-05-07-04-15-01.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05070415Service } from '../service/05-07-04-15.service';

describe('Doc0507041501Component', () => {
  let fixture: ComponentFixture<Doc0507041501Component>;
  let component: Doc0507041501Component;

  const Doc05070415ServiceStub: jasmine.SpyObj<
    Doc05070415Service
  > = jasmine.createSpyObj('Doc05070415Service', ['foo']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc0507041501Component],
      /*
       * 通过 TestModuleMetadata.providers 注册的 service，是注册到了 TestingModule 的 injector 中去，
       * 而通过 @Component.providers 注册的 service 是注册到了 component injector 中去，
       * component injector 是 TestingModule injector 的下级，
       * 因此通过 TestModuleMetadata.providers 注册的 service 不能覆盖 component injector 中的 service，
       * 如下，在 TestingModule 中注册的 Doc05070415Service 并不会被 Doc0507041501Component 使用，
       * Doc0507041501Component 使用的是它自己的 injector 中的 Doc05070415Service
       */
      providers: [
        {
          provide: Doc05070415Service,
          useValue: Doc05070415ServiceStub,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0507041501Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not override Doc05070415Service', () => {
    Doc05070415ServiceStub.foo.and.returnValue('BAR');

    fixture.detectChanges();

    expect(component.foo).not.toEqual('BAR');
    expect(Doc05070415ServiceStub.foo).not.toHaveBeenCalledTimes(1);

    expect(component.foo).toEqual('FOO');
  });
});
