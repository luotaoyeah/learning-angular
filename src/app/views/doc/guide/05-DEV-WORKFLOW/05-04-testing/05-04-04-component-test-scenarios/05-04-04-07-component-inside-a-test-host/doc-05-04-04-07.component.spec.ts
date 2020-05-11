import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Doc05040407Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-07-component-inside-a-test-host/doc-05-04-04-07.component';

/*
 * 使用一个临时的 host component 用于测试
 */
@Component({
  template: '<app-doc-05-04-04-07 [foo]="foo" (click01)="handleClick($event)"></app-doc-05-04-04-07>',
})
class TestHostComponent {
  public foo: string = 'foo';
  public bar: number = 0;

  public handleClick($event: number) {
    this.bar = $event;
  }
}

/*
 * 这种测试方式的特点在于, 是从 host component 的角度来对我们的 component 来进行测试,
 * 而不是直接对我们的 component 进行测试
 */
describe('Doc05040407Component', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;
  let buttonDebugEl: DebugElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TestHostComponent, Doc05040407Component],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    buttonDebugEl = fixture.debugElement.query(By.css('button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(buttonDebugEl).toBeTruthy();
  });

  it('should display foo in uppercase', () => {
    fixture.detectChanges();

    expect((buttonDebugEl.nativeElement as HTMLButtonElement).textContent).toEqual('FOO');
  });

  it('should raise #click01 event', () => {
    buttonDebugEl.triggerEventHandler('click', null);
    expect(component.bar).toEqual(99);
  });
});
