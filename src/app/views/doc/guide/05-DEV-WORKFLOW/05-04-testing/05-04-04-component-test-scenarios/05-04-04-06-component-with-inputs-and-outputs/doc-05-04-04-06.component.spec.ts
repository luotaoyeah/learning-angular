import { Doc05040406Component } from './doc-05-04-04-06.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SharedModule } from '@app/shared';

describe('Doc05040406Component', () => {
  let fixture: ComponentFixture<Doc05040406Component>;
  let component: Doc05040406Component;
  let buttonDebugEl: DebugElement;
  let buttonEl: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc05040406Component],
      imports: [SharedModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05040406Component);
    component = fixture.componentInstance;

    buttonDebugEl = fixture.debugElement.query(By.css('button'));
    buttonEl = buttonDebugEl.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(buttonDebugEl).toBeTruthy();
  });

  /*
   * https://angular.io/guide/testing#test-dashboardherocomponent-stand-alone
   */
  it('should display foo in uppercase', () => {
    /*
     * 直接给 component 的 input property 赋值
     */
    component.foo = 'bar';

    fixture.detectChanges();
    expect(buttonEl.textContent).toEqual(component.foo.toUpperCase());
  });

  /*
   * https://angular.io/guide/testing#triggereventhandler
   */
  it('should raise #click01 event when clicked using `triggerEventHandler()`', () => {
    let $event: number = 0;

    component.click01.subscribe((value: number) => {
      $event = value;
    });

    /*
     * 通过 DebugElement.triggerEventHandler() 方法, 派发一个事件
     */
    buttonDebugEl.triggerEventHandler('click', null);

    expect($event).toEqual(99);
  });

  /*
   * https://angular.io/guide/testing#click-the-element
   */
  it('should raise #click01 event when clicked using `HTMLButtonElement.click()`', () => {
    let $event: number = 0;

    component.click01.subscribe((value: number) => {
      $event = value;
    });

    /*
     * 可以直接调用 HTMLElement.click() 方法, 来派发一个事件
     */
    buttonEl.click();
    expect($event).toEqual(99);
  });
});