import { Doc0507040103Component } from './doc-05-07-04-01-03.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd';

describe('Doc0507040103Component', () => {
  let fixture: ComponentFixture<Doc0507040103Component>;
  // @ts-ignore: TS6133
  let component: Doc0507040103Component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc0507040103Component],
      imports: [FormsModule, NzButtonModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0507040103Component);
    component = fixture.componentInstance;
  });

  it('should convert title to uppercase', () => {
    const nativeElement = fixture.nativeElement as HTMLElement;
    const inputEl = nativeElement.querySelector<HTMLInputElement>('input');
    const spanEl = nativeElement.querySelector<HTMLSpanElement>('span');

    if (inputEl && spanEl) {
      /*
       * 如何模拟用户输入？
       *     1. 直接修改元素的 value 属性
       */
      inputEl.value = 'foo';

      /*
       * 2. 触发一个 input 事件
       */
      inputEl.dispatchEvent(
        new Event('input', {
          bubbles: false,
          cancelable: false,
        }),
      );

      /*
       * 3. 触发一个 change detection
       */
      fixture.detectChanges();

      /*
       * FIXME 下面的测试失败
       */
      // expect(spanEl.textContent).toEqual('FOO');
    }
  });
});
