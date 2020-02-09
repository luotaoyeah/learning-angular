import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc0504041002Component } from './doc-05-04-04-10-02.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Doc0504041002Component', () => {
  let fixture: ComponentFixture<Doc0504041002Component>;
  let component: Doc0504041002Component;

  beforeEach(async(() => {
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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0504041002Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
