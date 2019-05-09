import { Doc05070415Component } from './doc-05-07-04-15.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('Doc05070415Component', () => {
  let fixture: ComponentFixture<Doc05070415Component>;
  let component: Doc05070415Component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc05070415Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05070415Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
