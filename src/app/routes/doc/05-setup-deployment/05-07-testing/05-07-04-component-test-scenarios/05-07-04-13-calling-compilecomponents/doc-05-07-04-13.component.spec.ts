import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05070413Component } from './doc-05-07-04-13.component';

describe('Doc05070413Component', () => {
  let fixture: ComponentFixture<Doc05070413Component>;
  let component: Doc05070413Component;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [Doc05070413Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05070413Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
