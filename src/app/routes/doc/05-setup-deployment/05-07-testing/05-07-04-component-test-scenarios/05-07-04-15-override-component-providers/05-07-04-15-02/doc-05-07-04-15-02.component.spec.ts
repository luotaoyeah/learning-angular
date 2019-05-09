import { Doc0507041502Component } from './doc-05-07-04-15-02.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05070415Service } from '../service/05-07-04-15.service';

describe('Doc0507041502Component', () => {
  let fixture: ComponentFixture<Doc0507041502Component>;
  let component: Doc0507041502Component;

  const Doc05070415ServiceStub: jasmine.SpyObj<
    Doc05070415Service
  > = jasmine.createSpyObj('Doc05070415Service', ['foo']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc0507041502Component],
    })
      /*
       * 使用 TestBedStatic.overrideComponent() 方法，
       * 可以修改某个 component 的 component metadata，包括 add/remove/set
       */
      .overrideComponent(Doc0507041502Component, {
        set: {
          providers: [
            {
              provide: Doc05070415Service,
              useValue: Doc05070415ServiceStub,
            },
          ],
        },
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0507041502Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not override Doc05070415Service', () => {
    Doc05070415ServiceStub.foo.and.returnValue('BAR');

    fixture.detectChanges();

    expect(component.foo).toEqual('BAR');
    expect(Doc05070415ServiceStub.foo).toHaveBeenCalledTimes(1);
  });
});
