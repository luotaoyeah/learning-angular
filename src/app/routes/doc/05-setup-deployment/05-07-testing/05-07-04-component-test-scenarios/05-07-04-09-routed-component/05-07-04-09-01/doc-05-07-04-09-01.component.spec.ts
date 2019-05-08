import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc0507040901Component } from './doc-05-07-04-09-01.component';
import { SharedModule } from '@shared';
import { ActivatedRouteStub } from './activated-route-stub';
import { ActivatedRoute } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Doc0507040901Component', () => {
  let fixture: ComponentFixture<Doc0507040901Component>;
  let component: Doc0507040901Component;
  let activatedRouteStub: ActivatedRouteStub;
  let buttonDebugEl: DebugElement;

  beforeEach(async(() => {
    activatedRouteStub = new ActivatedRouteStub();

    TestBed.configureTestingModule({
      declarations: [Doc0507040901Component],
      imports: [SharedModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteStub,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0507040901Component);
    component = fixture.componentInstance;
    buttonDebugEl = fixture.debugElement.query(By.css('button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(buttonDebugEl).toBeTruthy();
  });

  it('should display foo', () => {
    activatedRouteStub.setParamMap({
      foo: 'foo',
    });

    fixture.detectChanges();

    expect(
      (buttonDebugEl.nativeElement as HTMLButtonElement).textContent,
    ).toEqual('FOO');
  });
});
