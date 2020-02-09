import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { X0501Component } from './x-05-01.component';

describe('X0501Component', () => {
  let component: X0501Component;
  let fixture: ComponentFixture<X0501Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [X0501Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(X0501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
