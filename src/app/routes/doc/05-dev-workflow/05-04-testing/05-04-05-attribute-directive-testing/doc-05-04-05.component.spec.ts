import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc050405Component } from './doc-05-04-05.component';
import { Doc05040501Directive } from './directive/doc-05-04-05-01.directive';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('Doc050405Component', () => {
  let fixture: ComponentFixture<Doc050405Component>;
  let component: Doc050405Component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc050405Component, Doc05040501Directive],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc050405Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
   * 可以在某个 component 的测试文件中，对某个 directive 进行测试
   */
  it('should set color to skyblue', () => {
    fixture.detectChanges();

    const buttonDebugEl: DebugElement = fixture.debugElement.query(
      By.css('button'),
    );

    const buttonEl: HTMLButtonElement = buttonDebugEl.nativeElement as HTMLButtonElement;
    expect(buttonEl.style.color).toEqual('skyblue');
  });
});
