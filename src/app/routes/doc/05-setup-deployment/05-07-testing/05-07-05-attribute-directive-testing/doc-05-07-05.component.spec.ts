import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc050705Component } from './doc-05-07-05.component';
import { Doc05070501Directive } from './directive/doc-05-07-05-01.directive';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('Doc050705Component', () => {
  let fixture: ComponentFixture<Doc050705Component>;
  let component: Doc050705Component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc050705Component, Doc05070501Directive],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc050705Component);
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
