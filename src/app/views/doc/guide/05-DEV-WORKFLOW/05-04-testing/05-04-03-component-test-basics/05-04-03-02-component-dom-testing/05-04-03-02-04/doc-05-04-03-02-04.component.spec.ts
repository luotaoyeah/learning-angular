import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc0504030204Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-03-component-test-basics/05-04-03-02-component-dom-testing/05-04-03-02-04/doc-05-04-03-02-04.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('Doc0504030204Component', () => {
  let component: Doc0504030204Component;
  let fixture: ComponentFixture<Doc0504030204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc0504030204Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0504030204Component);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
   * 为了屏蔽平台差异性, DebugElement 提供了几个方法, 用来查找下级节点,
   * 比如, DebugElement.query() 用来模拟 HTMLElement.querySelector() 方法,
   * DebugElement.query() 方法接收一个 Predicate<DebugElement> 类型的查询条件,
   * By.css() 返回的就是这样的一个查询条件, By.css() 方法接收各种 CSS 选择器作为参数
   */
  it('should find a <button> with `By.css()`', () => {
    const spanDebugElement: DebugElement = fixture.debugElement.query(By.css('button'));
    console.log('spanDebugElement', spanDebugElement);
    expect((spanDebugElement.nativeElement as HTMLSpanElement).textContent).toEqual('FOO');
  });
});
