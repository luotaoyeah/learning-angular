import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SharedModule } from '@app/shared';
import { Doc05040408Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-08-routing-component/doc-05-04-04-08.component';

describe('Doc05040408Component', () => {
  let fixture: ComponentFixture<Doc05040408Component>;
  let component: Doc05040408Component;
  let buttonDebugEl: DebugElement;
  let RouterSpy: jasmine.SpyObj<Router>;

  beforeEach(
    waitForAsync(() => {
      /*
       * 创建一个 SpyObj 对象，用来模拟 Router
       */
      RouterSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

      TestBed.configureTestingModule({
        declarations: [Doc05040408Component],
        imports: [SharedModule],
        providers: [
          {
            provide: Router,
            useValue: RouterSpy,
          },
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05040408Component);
    component = fixture.componentInstance;
    buttonDebugEl = fixture.debugElement.query(By.css('button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(buttonDebugEl).toBeTruthy();
  });

  it('should navigate when clicked', () => {
    buttonDebugEl.triggerEventHandler('click', null);

    expect(RouterSpy.navigateByUrl as Spy).toHaveBeenCalledTimes(1);

    const firstCallInfo = (RouterSpy.navigateByUrl as Spy).calls.first();
    expect(firstCallInfo.args[0]).toEqual('/doc/05/04/04/08/01');
    expect(firstCallInfo.args[1]).toEqual(jasmine.objectContaining({ queryParams: { foo: 99 } }));
  });
});
