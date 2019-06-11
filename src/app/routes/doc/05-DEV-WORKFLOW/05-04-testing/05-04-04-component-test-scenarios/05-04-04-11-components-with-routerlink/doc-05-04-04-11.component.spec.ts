import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05040411Component } from './doc-05-04-04-11.component';

describe('Doc05040411Component', () => {
  let fixture: ComponentFixture<Doc05040411Component>;
  let component: Doc05040411Component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc05040411Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05040411Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
