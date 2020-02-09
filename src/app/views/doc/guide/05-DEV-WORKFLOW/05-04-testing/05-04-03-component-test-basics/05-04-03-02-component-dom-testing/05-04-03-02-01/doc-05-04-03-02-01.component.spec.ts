import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc0504030201Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-03-component-test-basics/05-04-03-02-component-dom-testing/05-04-03-02-01/doc-05-04-03-02-01.component';

describe('Doc0504030201Component', () => {
  let component: Doc0504030201Component;
  let fixture: ComponentFixture<Doc0504030201Component>;

  /*
   * describe() 称之为一个 test suite（测试套装）, 下面可以有多个 spec,
   * 每一个 it() 称之为一个 spec（测试）,
   * beforeEach() 会在每一个 it() 执行之前执行, 包含的是公共的初始化代码
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc0504030201Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    /*
     * TestBed.createComponent() 方法, 用来创建一个组件实例,
     * 并将对应的组件元素（component element）添加到用于测试的 DOM 中去,
     * 所有对 TestBed 进行的配置都应该在调用 createComponent() 方法之前进行
     */
    fixture = TestBed.createComponent(Doc0504030201Component);

    /*
     * 通过 ComponentFixture 对象访问组件实例以及对应的 element
     */
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
