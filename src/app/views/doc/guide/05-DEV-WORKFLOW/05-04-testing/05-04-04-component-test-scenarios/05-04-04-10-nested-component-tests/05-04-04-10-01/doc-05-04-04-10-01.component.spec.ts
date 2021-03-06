import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Doc0504041001Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-10-nested-component-tests/05-04-04-10-01/doc-05-04-04-10-01.component';

/*
 * 通常一个 parent component 的 template 里面会包含很多的 child component,
 * 当我们在测试这个 parent component 的时候, 通常我们并不关心这些 child component,
 * 一种方式就是, 类似于 service stub 的方式, 给这些 child component 提供一个 component stub,
 * 用来替代真实的 child component,
 * component stub 的 selector 必须跟 real component 的 selector 一样（这样才能实现替换的效果）,
 * 同时, component stub 的 class 和 template 是空的
 */

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nz-alert',
  template: '',
})
class NzAlertStubComponent {}

describe('Doc0504041001Component', () => {
  let fixture: ComponentFixture<Doc0504041001Component>;
  let component: Doc0504041001Component;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Doc0504041001Component, NzAlertStubComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0504041001Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
