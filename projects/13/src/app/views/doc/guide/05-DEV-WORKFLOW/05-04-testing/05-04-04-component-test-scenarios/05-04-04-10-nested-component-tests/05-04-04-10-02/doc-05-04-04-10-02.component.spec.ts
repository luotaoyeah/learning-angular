import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Doc0504041002Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-10-nested-component-tests/05-04-04-10-02/doc-05-04-04-10-02.component';

describe('Doc0504041002Component', () => {
  let fixture: ComponentFixture<Doc0504041002Component>;
  let component: Doc0504041002Component;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Doc0504041002Component],
        /*
         * 在测试 parent component 时, 对于我们不关心的 child component,
         * 一种方式是使用 stub component,
         * 一种方式是设置 schemas 为 NO_ERRORS_SCHEMA,
         *     表示, 所有 unknown element 和 unknown attribute 都会被忽略
         *
         * 通常, 两种方式需要结合使用
         */
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0504041002Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
