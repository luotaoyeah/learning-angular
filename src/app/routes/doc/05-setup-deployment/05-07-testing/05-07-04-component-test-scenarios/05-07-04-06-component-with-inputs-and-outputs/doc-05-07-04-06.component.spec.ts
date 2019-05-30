import { Doc05070406Component } from './doc-05-07-04-06.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SharedModule } from '@app/shared';

describe('Doc05070406Component', () => {
  let fixture: ComponentFixture<Doc05070406Component>;
  let component: Doc05070406Component;
  let buttonDebugEl: DebugElement;
  let buttonEl: HTMLButtonElement | null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc05070406Component],
      imports: [SharedModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05070406Component);
    component = fixture.componentInstance;

    buttonDebugEl = fixture.debugElement.query(By.css('button'));
    buttonEl = buttonDebugEl.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(buttonDebugEl).toBeTruthy();
  });

  it('should display foo in uppercase', () => {
    if (buttonEl) {
      component.foo = 'bar';

      fixture.detectChanges();
      expect(buttonEl.textContent).toEqual('BAR');
    }
  });

  it('should raise ntClick event when clicked using triggerEventHandler ', () => {
    let $event: number = 0;

    /*
     * 通过 EventEmitter.subscribe() 方法，注册事件监听函数
     */
    component.ntClick.subscribe((value: number) => {
      $event = value;
    });

    /*
     * 通过 DebugElement.triggerEventHandler() 方法，触发一个事件
     */
    buttonDebugEl.triggerEventHandler('click', 0);

    expect($event).toEqual(99);
  });

  it('should raise ntClick event when clicked using HTMLButtonElement.click()', () => {
    let $event: number = 0;

    component.ntClick.subscribe((value: number) => {
      $event = value;
    });

    if (buttonEl) {
      /*
       * 可以直接调用 HTMLElement.click() 方法，来触发一个事件
       */
      buttonEl.click();
      expect($event).toEqual(99);
    }
  });
});
