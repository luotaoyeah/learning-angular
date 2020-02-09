import { Doc0504040101Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-01-component-binding/05-04-04-01-01/doc-05-04-04-01-01.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('Doc0504040101Component', () => {
  let component: Doc0504040101Component;
  let fixture: ComponentFixture<Doc0504040101Component>;
  let h1El: HTMLHeadingElement | null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc0504040101Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0504040101Component);
    component = fixture.componentInstance;
    h1El = (fixture.nativeElement as HTMLElement).querySelector('h1');
  });

  it('should have a <h1> ', () => {
    expect(h1El).toBeTruthy();
  });

  /*
   * 使用 TestBed.createComponent() 方法创建组件之后, 并不会触发 change detection,
   * 因此不会更新 template 中的 data binding
   */
  it("should be empty for <h1>'s content", () => {
    if (h1El) {
      expect(h1El.textContent).toBe('');
    }
  });

  it("should update <h1>'s content after #detectChanges() ", () => {
    fixture.detectChanges();
    if (h1El) {
      expect(h1El.textContent).toEqual(component.title);
    }
  });

  it("should update <h1>'s content", () => {
    /*
     * 修改了组件的属性之后, 需要手动调用 ComponentFixture.detectChanges() 方法,
     * 来触发一次 change detection cycle, 才会更新 template 中的 data binding
     */
    component.title = 'BAR';
    fixture.detectChanges();

    if (h1El) {
      expect(h1El.textContent).toEqual('BAR');
    }
  });
});
