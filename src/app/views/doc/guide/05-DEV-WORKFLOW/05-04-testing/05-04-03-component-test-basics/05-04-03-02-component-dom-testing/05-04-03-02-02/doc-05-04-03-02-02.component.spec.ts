import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Doc0504030202Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-03-component-test-basics/05-04-03-02-component-dom-testing/05-04-03-02-02/doc-05-04-03-02-02.component';

describe('Doc0504030202Component', () => {
  let component: Doc0504030202Component;
  let fixture: ComponentFixture<Doc0504030202Component>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Doc0504030202Component],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0504030202Component);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "FOO"', () => {
    /*
     * ComponentFixture.nativeElement 表示组件元素, 它的类型是 any,
     * 因为一个 angular 应用不一定是在浏览器中运行的, 所以 ComponentFixture.nativeElement 不一定是一个 DOM 元素,
     * 但是在这里, 我们知道它肯定是一个 DOM 元素
     */
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('FOO');
  });

  it('should contain "FOO" in a <button>', () => {
    const element: HTMLElement = fixture.nativeElement;
    const spanEl: HTMLSpanElement | null = element.querySelector('button');
    if (spanEl) {
      expect(spanEl.textContent).toEqual('FOO');
    }
  });
});
