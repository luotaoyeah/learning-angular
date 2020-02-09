import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05040409Component } from './doc-05-04-04-09.component';
import { SharedModule } from '@app/shared';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Doc05040409Component', () => {
  let fixture: ComponentFixture<Doc05040409Component>;
  let component: Doc05040409Component;
  let buttonDebugEl: DebugElement;
  const RouterSpyObj: jasmine.SpyObj<Router> = jasmine.createSpyObj('Router', [
    'navigateByUrl',
  ]);

  beforeEach(async(() => {
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
  }));

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
