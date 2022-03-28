import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '@app/shared';
import { ActivatedRouteStub } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-09-routed-component/05-04-04-09-01/activated-route-stub';
import { Doc0504040901Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-09-routed-component/05-04-04-09-01/doc-05-04-04-09-01.component';

describe('Doc0504040901Component', () => {
  let fixture: ComponentFixture<Doc0504040901Component>;
  let component: Doc0504040901Component;
  let activatedRouteStub: ActivatedRouteStub;
  let buttonDebugEl: DebugElement;

  beforeEach(
    waitForAsync(() => {
      activatedRouteStub = new ActivatedRouteStub({});

      TestBed.configureTestingModule({
        declarations: [Doc0504040901Component],
        imports: [SharedModule],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: activatedRouteStub,
          },
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0504040901Component);
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

    expect((buttonDebugEl.nativeElement as HTMLButtonElement).textContent).toEqual('FOO');
  });
});
