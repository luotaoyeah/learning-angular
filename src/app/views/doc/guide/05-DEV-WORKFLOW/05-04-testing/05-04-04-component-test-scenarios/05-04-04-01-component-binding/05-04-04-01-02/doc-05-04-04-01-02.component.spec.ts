import { Doc0504040102Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-01-component-binding/05-04-04-01-02/doc-05-04-04-01-02.component';
import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

describe('Doc0504040102Component', () => {
  let fixture: ComponentFixture<Doc0504040102Component>;
  let component: Doc0504040102Component;
  let h1El: HTMLHeadingElement | null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc0504040102Component],
      /*
       * 默认情况下, 在测试时, angular 不会自动执行 change detection,
       * 我们可以通过注册 providers 设置 ComponentFixtureAutoDetect 为 true 来启用自动执行
       */
      providers: [
        {
          provide: ComponentFixtureAutoDetect,
          useValue: true,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0504040102Component);
    component = fixture.componentInstance;
    h1El = (fixture.nativeElement as HTMLElement).querySelector('h1');
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  /*
   * 启用了 ComponentFixtureAutoDetect 之后, 在组件初次加载之后,
   * template 中的 data binding 完成了一次更新
   *
   */
  it("should update <h1>'s after component creation", () => {
    if (h1El) {
      expect(h1El.textContent).toEqual(component.title);
    }
  });

  /*
   * ComponentFixtureAutoDetect 只对 asynchronous 操作有效,
   * 如下直接通过同步的方式修改组件的属性, 不会自动触发 change detection
   */
  it("should not update <h1>'s content by changing property synchronously", () => {
    if (h1El) {
      component.title = 'BAR';
      expect(h1El.textContent).toEqual('FOO');
    }
  });

  /*
   * 虽然启用了 ComponentFixtureAutoDetect,
   * 但是很多时候我们依然需要手动调用 ComponentFixture.detectChanges() 方法
   */
  it("should update <h1>'s content after #detectChanges()", () => {
    if (h1El) {
      component.title = 'BAZ';
      fixture.detectChanges();
      expect(h1El.textContent).toEqual('BAZ');
    }
  });
});
