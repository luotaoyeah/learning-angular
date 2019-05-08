import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05070411Component } from './doc-05-07-04-11.component';

describe('Doc05070411Component', () => {
  let fixture: ComponentFixture<Doc05070411Component>;
  let component: Doc05070411Component;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [Doc05070411Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05070411Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
