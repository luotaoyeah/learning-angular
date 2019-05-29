import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { X0503Component } from './x-05-03.component';

describe('X0503Component', () => {
  let component: X0503Component;
  let fixture: ComponentFixture<X0503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [X0503Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(X0503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
