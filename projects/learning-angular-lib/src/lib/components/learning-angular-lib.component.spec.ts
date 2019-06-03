import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningAngularLibComponent } from './learning-angular-lib.component';

describe('LearningAngularLibComponent', () => {
  let component: LearningAngularLibComponent;
  let fixture: ComponentFixture<LearningAngularLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LearningAngularLibComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningAngularLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
