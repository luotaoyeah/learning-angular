import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05070412Component } from './doc-05-07-04-12.component';

describe('Doc05070412Component', () => {
  let fixture: ComponentFixture<Doc05070412Component>;
  let component: Doc05070412Component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc05070412Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05070412Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
