import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc0507030201Component } from './doc-05-07-03-02-01.component';
import { By } from '@angular/platform-browser';

describe('Doc0507030201Component', () => {
  let component: Doc0507030201Component;
  let fixture: ComponentFixture<Doc0507030201Component>;

  /*
   * describe() 称之为一个 test suite（测试套装），下面可以有多个 spec，
   * it() 称之为一个 spec（测试），
   * beforeEach() 会在每一个 it() 执行之前执行，包含的是公共的初始化代码
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc0507030201Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    /*
     * TestBedStatic.createComponent() 方法，用来创建一个组件实例，
     * 并将对应的组件元素（component element）添加到 test-runner DOM 中去，
     * 所有对 TestBed 进行的配置都应该在调用 createComponent() 方法之前进行
     */
    fixture = TestBed.createComponent(Doc0507030201Component);

    /*
     * 通过 ComponentFixture 对象访问 component 以及对应的 element
     */
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "DOM"', () => {
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('DOM');
  });

  it('should contain "DOM" in p', () => {
    /*
     * ComponentFixture.nativeElement 属性，表示 component 对应的 DOM 根元素
     */
    const nativeElement = fixture.nativeElement as HTMLElement;
    const pEl = nativeElement.querySelector('p');

    expect(pEl).toBeTruthy();
    // tslint:disable-next-line:no-non-null-assertion
    expect(pEl!.textContent).toContain('DOM');
  });

  /*
   * 由于 angular 的测试可能不是在浏览器中运行的，因此 nativeElement 可能不是一个真正的 HTMLElement 对象，
   * 因此 angular 提供了 DebugElement 对象，对 nativeElement 进行了抽象，
   * 当我们通过 DebugElement.nativeElement 属性获取元素时，
   * angular 会根据当前所处的具体平台，返回特定的元素对象，
   * 同时，DebugElement 还提供了很多其他有用的工具方法
   */
  it('should contain "DOM" in p again', () => {
    const nativeElement = fixture.debugElement.nativeElement as HTMLElement;
    const pEl = nativeElement.querySelector('p');
    expect(pEl).toBeTruthy();
    if (pEl) {
      expect(pEl.textContent).toContain('DOM');
    }
  });

  it('should find the <p> with By.css()', () => {
    /*
     * 由于代码的执行环境不确定，可能是在浏览器，也可能是通过 SSR 运行，
     * 因此为了屏蔽这些环境的差异，angular 提供了 DebugElement 类型，
     * 我们可以通过 DebugElement 提供的许多平台无关的通用的方法，来对代码进行测试
     */

    /*
     * 使用 DebugElement.query() 方法，可以根据一个 Predicate 对象，查询满足条件的 DebugElement 对象，
     * By 类提供了几个通用的方法，用来构建 Predicate 对象
     */
    const pDebugElement = fixture.debugElement.query(By.css('p'));
    expect(pDebugElement.nativeElement).toBeTruthy();
    expect(
      (pDebugElement.nativeElement as HTMLParagraphElement).textContent,
    ).toContain('DOM');
  });
});
