import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05070410Component } from './doc-05-07-04-10.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Doc05070410Component', () => {
  let fixture: ComponentFixture<Doc05070410Component>;
  let component: Doc05070410Component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc05070410Component],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05070410Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
