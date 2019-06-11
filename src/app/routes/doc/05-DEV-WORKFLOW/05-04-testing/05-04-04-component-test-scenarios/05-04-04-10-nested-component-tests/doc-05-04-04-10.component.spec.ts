import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05040410Component } from './doc-05-04-04-10.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Doc05040410Component', () => {
  let fixture: ComponentFixture<Doc05040410Component>;
  let component: Doc05040410Component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc05040410Component],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05040410Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
