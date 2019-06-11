import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05040412Component } from './doc-05-04-04-12.component';

describe('Doc05040412Component', () => {
  let fixture: ComponentFixture<Doc05040412Component>;
  let component: Doc05040412Component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc05040412Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05040412Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
