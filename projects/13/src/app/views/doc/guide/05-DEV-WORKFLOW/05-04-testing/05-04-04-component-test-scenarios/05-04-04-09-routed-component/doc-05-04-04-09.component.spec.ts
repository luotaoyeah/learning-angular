import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SharedModule } from '@app/shared';
import { Doc05040409Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-09-routed-component/doc-05-04-04-09.component';

describe('Doc05040409Component', () => {
  let fixture: ComponentFixture<Doc05040409Component>;
  let component: Doc05040409Component;
  let buttonDebugEl: DebugElement;
  const RouterSpyObj: jasmine.SpyObj<Router> = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Doc05040409Component],
        imports: [SharedModule],
        providers: [
          {
            provide: Router,
            useValue: RouterSpyObj,
          },
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05040409Component);
    component = fixture.componentInstance;
    buttonDebugEl = fixture.debugElement.query(By.css('button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate when clicked', () => {
    buttonDebugEl.triggerEventHandler('click', null);
    expect(RouterSpyObj.navigateByUrl).toHaveBeenCalledTimes(1);
  });
});
