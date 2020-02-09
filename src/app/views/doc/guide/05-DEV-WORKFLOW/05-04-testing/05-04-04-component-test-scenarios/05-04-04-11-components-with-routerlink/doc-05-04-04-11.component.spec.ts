import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05040411Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-11-components-with-routerlink/doc-05-04-04-11.component';
import { Directive, HostListener, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

/*
 * 使用真实的 RouterLink 来测试会比较复杂, 我们可以使用一个 stub 用来测试
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[routerLink]',
})
// tslint:disable-next-line:directive-class-suffix
class RouterLinkDirectiveStub {
  @Input('routerLink')
  public linkParams!: string;

  public navigatedTo: string = '';

  @HostListener('click')
  public onClick() {
    this.navigatedTo = this.linkParams;
  }
}

describe('src/app/routes/doc/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-11-components-with-routerlink/doc-05-04-04-11.component.ts', () => {
  let fixture: ComponentFixture<Doc05040411Component>;
  let component: Doc05040411Component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc05040411Component, RouterLinkDirectiveStub],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05040411Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should query RouterLinks from template', () => {
    const debugElements = fixture.debugElement.queryAll(
      By.directive(RouterLinkDirectiveStub),
    );

    expect(debugElements.length).toBe(2);
  });

  it('should navigate when click', () => {
    const debugElements = fixture.debugElement.queryAll(
      By.directive(RouterLinkDirectiveStub),
    );

    const routerLinkDirectiveStub = debugElements[0].injector.get(
      RouterLinkDirectiveStub,
    );

    fixture.detectChanges();

    expect(routerLinkDirectiveStub.linkParams).toEqual('/foo');
    expect(routerLinkDirectiveStub.navigatedTo).toEqual('');

    debugElements[0].triggerEventHandler('click', null);

    expect(routerLinkDirectiveStub.navigatedTo).toEqual(
      routerLinkDirectiveStub.linkParams,
    );
  });
});
