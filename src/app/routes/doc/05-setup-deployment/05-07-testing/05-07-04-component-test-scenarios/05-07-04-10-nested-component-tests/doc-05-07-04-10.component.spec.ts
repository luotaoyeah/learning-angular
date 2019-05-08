import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05070410Component } from './doc-05-07-04-10.component';

describe('Doc05070410Component', () => {
  let fixture: ComponentFixture<Doc05070410Component>;
  let component: Doc05070410Component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc05070410Component],
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
