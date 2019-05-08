import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05070408Component } from './doc-05-07-04-08.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SharedModule } from '@shared';

describe('Doc05070408Component', () => {
  let fixture: ComponentFixture<Doc05070408Component>;
  let component: Doc05070408Component;
  let buttonDebugEl: DebugElement;
  let RouterSpy: jasmine.SpyObj<Router>;

  beforeEach(async(() => {
    /*
     * 创建一个 SpyObj 对象，用来模拟 Router
     */
    RouterSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    TestBed.configureTestingModule({
      declarations: [Doc05070408Component],
      imports: [SharedModule],
      providers: [
        {
          provide: Router,
          useValue: RouterSpy,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05070408Component);
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

    const firstCallInfo: jasmine.CallInfo = (RouterSpy.navigateByUrl as Spy).calls.first();
    expect(firstCallInfo.args[0]).toEqual('/doc/05/07/04/08/01');
    expect(firstCallInfo.args[1]).toEqual(
      jasmine.objectContaining({ queryParams: { foo: 99 } }),
    );
  });
});
