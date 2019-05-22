import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc0507041001Component } from './doc-05-07-04-10-01.component';
import { Component } from '@angular/core';

/*
 * 通常一个 parent component 的 template 里面会包含很多的 child component，
 * 当我们在测试这个 parent component 的时候，通常我们并不关心这些 child component，
 * 一种方式就是，类似于 service stub 方式，给这些 child component 提供一个 stub component，
 * 用来替代真实的 child component，如下：
 * stub component 的 selector 必须跟 real component 的 selector 一样（这样才能实现替换的效果），
 * 同时，stub component 的 template 是空的
 */

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nz-alert',
  template: '',
})
class NzAlertStubComponent {}

describe('Doc0507041001Component', () => {
  let fixture: ComponentFixture<Doc0507041001Component>;
  let component: Doc0507041001Component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc0507041001Component, NzAlertStubComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0507041001Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
