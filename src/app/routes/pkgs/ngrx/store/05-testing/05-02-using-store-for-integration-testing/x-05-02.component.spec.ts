import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { X0502Component } from './x-05-02.component';

describe('X0502Component', () => {
  let component: X0502Component;
  let fixture: ComponentFixture<X0502Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [X0502Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(X0502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});