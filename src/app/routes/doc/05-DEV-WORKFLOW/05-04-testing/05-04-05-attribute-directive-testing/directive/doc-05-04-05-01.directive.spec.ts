import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05040501Directive } from './doc-05-04-05-01.directive';
import { SharedModule } from '@app/shared';
import { By } from '@angular/platform-browser';

/*
 * 在测试 directive 的时候，通常可以构建一个 test component，
 * 里面应该包含该 directive 的各种使用场景
 */
@Component({
  template: `
    <h2 appDoc05040501="yellow">Something Yellow</h2>
    <h2 appDoc05040501>The Default (Gray)</h2>
    <h2>No Highlight</h2>
    <input nz-input #box [appDoc05040501]="box.value" value="cyan" />>
  `,
})
class TestComponent {}

describe('Doc05040501Directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  let h2DebugElements: Array<DebugElement>;
  let h2DebugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, Doc05040501Directive],
      imports: [SharedModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);

    fixture.detectChanges();

    /*
     * DebugElement.queryAll() 方法，
     * 用来查询所有满足条件的 DebugElement
     */
    h2DebugElements = fixture.debugElement.queryAll(
      /*
       * By.directive() 方法，
       * 用来构造一个查询谓语：查询应用了指定 directive 的 DebugElement
       */
      By.directive(Doc05040501Directive),
    );
    h2DebugElement = fixture.debugElement.query(
      By.css(':not([appDoc05040501])'),
    );
  });

  it('should create', () => {
    expect(h2DebugElements.length).toEqual(3);
    expect(h2DebugElement).toBeTruthy();
  });

  it('should color 1st <h2> color yellow', () => {
    expect(
      (h2DebugElements[0].nativeElement as HTMLHeadingElement).style.color,
    ).toEqual('yellow');
  });

  it('should color 2nd <h2> color w/ default color', () => {
    /*
     * angular 会将 directive 注册到它所在的 element 的 injector 中
     */
    const doc05070501Directive = h2DebugElements[1].injector.get(
      Doc05040501Directive,
    ) as Doc05040501Directive;

    expect(
      (h2DebugElements[1].nativeElement as HTMLHeadingElement).style.color,
    ).toEqual(doc05070501Directive.defaultColor);
  });

  it('should bind <input> color to value color', () => {
    const inputEl = h2DebugElements[2].nativeElement as HTMLInputElement;
    expect(inputEl.style.color).toEqual('cyan');

    inputEl.value = 'green';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(inputEl.style.color).toEqual('green');
  });

  it('should have "Doc05040501Directive" in 1st <h2> providerTokens', () => {
    /*
     * DebugNode.providerTokens 属性
     */
    expect(h2DebugElements[0].providerTokens).toContain(Doc05040501Directive);
  });
});
