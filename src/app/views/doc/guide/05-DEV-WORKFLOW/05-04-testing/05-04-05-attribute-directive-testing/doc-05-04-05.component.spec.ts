import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Doc05040501Directive } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-05-attribute-directive-testing/directive/doc-05-04-05-01.directive';
import { Doc050405Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-05-attribute-directive-testing/doc-05-04-05.component';

describe('src/app/routes/doc/05-DEV-WORKFLOW/05-04-testing/05-04-05-attribute-directive-testing/doc-05-04-05.component.ts', () => {
  let fixture: ComponentFixture<Doc050405Component>;
  let component: Doc050405Component;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Doc050405Component, Doc05040501Directive],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc050405Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
   * 可以在某个 component 的测试文件中, 对某个 attribute directive 进行测试
   */
  it('should set color to skyblue', () => {
    fixture.detectChanges();

    const buttonDebugEl: DebugElement = fixture.debugElement.query(By.css('button'));

    const buttonEl: HTMLButtonElement = buttonDebugEl.nativeElement as HTMLButtonElement;
    expect(buttonEl.style.color).toEqual('skyblue');
  });
});
