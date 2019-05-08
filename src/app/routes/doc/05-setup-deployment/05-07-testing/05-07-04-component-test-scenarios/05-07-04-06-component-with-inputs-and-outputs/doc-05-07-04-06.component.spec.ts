import { Doc05070406Component } from './doc-05-07-04-06.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SharedModule } from '@shared';

describe('Doc05070406Component', () => {
  let fixture: ComponentFixture<Doc05070406Component>;
  let component: Doc05070406Component;
  let buttonDebugEl: DebugElement;
  let buttonEl: HTMLButtonElement | null;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [Doc05070406Component],
      imports: [SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05070406Component);
    component = fixture.componentInstance;

    buttonDebugEl = fixture.debugElement.query(By.css('button'));
    buttonEl = buttonDebugEl.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(buttonDebugEl).toBeTruthy();
  });

  it('should display foo in uppercase', () => {
    if (buttonEl) {
      component.foo = 'bar';

      fixture.detectChanges();
      expect(buttonEl.textContent).toEqual('BAR');
    }
  });
});
