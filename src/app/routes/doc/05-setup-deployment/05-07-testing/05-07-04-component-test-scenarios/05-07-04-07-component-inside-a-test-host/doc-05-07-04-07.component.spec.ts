import { Doc05070407Component } from './doc-05-07-04-07.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

/*
 * 使用一个临时的 host component 用于测试
 */
@Component({
  template:
    '<app-doc-05-07-04-07 [foo]="foo" (ntClick)="handleNtClick($event)"></app-doc-05-07-04-07>',
})
class TestHostComponent {
  public foo: string = 'foo';
  public bar: number = 0;

  public handleNtClick($event: number) {
    this.bar = $event;
  }
}

describe('Doc05070407Component', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;
  let buttonDebugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, Doc05070407Component],
    });
  }));

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

    expect(
      (buttonDebugEl.nativeElement as HTMLButtonElement).textContent,
    ).toEqual('FOO');
  });

  it('should raise ntClick event', () => {
    buttonDebugEl.triggerEventHandler('click', null);
    expect(component.bar).toEqual(99);
  });
});
