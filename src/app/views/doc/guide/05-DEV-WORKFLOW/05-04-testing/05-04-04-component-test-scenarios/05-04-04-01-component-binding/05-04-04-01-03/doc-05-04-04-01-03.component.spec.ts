import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@app/shared';
import { Doc0504040103Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-01-component-binding/05-04-04-01-03/doc-05-04-04-01-03.component';

describe('Doc0504040103Component', () => {
  let fixture: ComponentFixture<Doc0504040103Component>;
  let component: Doc0504040103Component;

  let inputEl: HTMLInputElement | null;
  let spanEl: HTMLSpanElement | null;

  beforeAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 10;
  });

  afterAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 5;
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc0504040103Component],
      imports: [SharedModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0504040103Component);
    component = fixture.componentInstance;
    const nativeElement = fixture.nativeElement as HTMLElement;
    inputEl = nativeElement.querySelector<HTMLInputElement>('input');
    spanEl = nativeElement.querySelector<HTMLSpanElement>('span');
  });

  it('should be empty for #title at the beginning', () => {
    expect(component.title).toEqual('');
  });

  it('should update #title after dispatch an `input` event', () => {
    fixture.detectChanges();

    if (inputEl && spanEl) {
      /*
       * 如何模拟用户输入?
       *     1. 直接修改元素的 value 属性
       */
      inputEl.value = 'foo';
      expect(component.title).toEqual('');

      /*
       * 2. 通过 dispatchEvent() 方法派发一个 input 事件
       */
      inputEl.dispatchEvent(new Event('input'));
      expect(component.title).toEqual('foo');

      /*
       * 3. 触发一个 change detection
       */
      fixture.detectChanges();
      expect(spanEl.textContent).toContain('FOO');
    }
  });
});
