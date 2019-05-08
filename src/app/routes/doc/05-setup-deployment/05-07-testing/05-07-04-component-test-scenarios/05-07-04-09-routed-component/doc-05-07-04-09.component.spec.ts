import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05070409Component } from './doc-05-07-04-09.component';
import { SharedModule } from '@shared';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Doc05070409Component', () => {
  let fixture: ComponentFixture<Doc05070409Component>;
  let component: Doc05070409Component;
  let buttonDebugEl: DebugElement;
  const RouterSpyObj: jasmine.SpyObj<Router> = jasmine.createSpyObj('Router', [
    'navigateByUrl',
  ]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc05070409Component],
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
    fixture = TestBed.createComponent(Doc05070409Component);
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
