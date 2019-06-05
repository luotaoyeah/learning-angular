import { Doc0504041502Component } from './doc-05-04-04-15-02.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05040415Service } from '../service/doc-05-04-04-15.service';

describe('Doc0504041502Component', () => {
  let fixture: ComponentFixture<Doc0504041502Component>;
  let component: Doc0504041502Component;

  const Doc05040415ServiceStub: jasmine.SpyObj<
    Doc05040415Service
  > = jasmine.createSpyObj('Doc05040415Service', ['foo']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc0504041502Component],
    })
      /*
       * 使用 TestBedStatic.overrideComponent() 方法，
       * 可以修改某个 component 的 component metadata，包括 add/remove/set
       */
      .overrideComponent(Doc0504041502Component, {
        set: {
          providers: [
            {
              provide: Doc05040415Service,
              useValue: Doc05040415ServiceStub,
            },
          ],
        },
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0504041502Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not override Doc05040415Service', () => {
    Doc05040415ServiceStub.foo.and.returnValue('BAR');

    fixture.detectChanges();

    expect(component.foo).toEqual('BAR');
    expect(Doc05040415ServiceStub.foo).toHaveBeenCalledTimes(1);
  });
});
