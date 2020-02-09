import { Doc05040415Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-15-override-component-providers/doc-05-04-04-15.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'app--doc-05-04-04-15-01',
  template: '',
})
class Doc0504041501StubComponent {}

@Component({
  selector: 'app--doc-05-04-04-15-02',
  template: '',
})
class Doc0504041502StubComponent {}

describe('Doc05040415Component', () => {
  let fixture: ComponentFixture<Doc05040415Component>;
  let component: Doc05040415Component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Doc05040415Component,
        Doc0504041501StubComponent,
        Doc0504041502StubComponent,
      ],
      imports: [SharedModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05040415Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
