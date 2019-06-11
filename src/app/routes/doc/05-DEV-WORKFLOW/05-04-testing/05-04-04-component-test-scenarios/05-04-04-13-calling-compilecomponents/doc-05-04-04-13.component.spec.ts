import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05040413Component } from './doc-05-04-04-13.component';

/*
 * 注意：
 *     如果是使用 ng test 命令来进行测试，则这一节讲的知识点可以忽略
 */
describe('Doc05040413Component', () => {
  let fixture: ComponentFixture<Doc05040413Component>;
  let component: Doc05040413Component;

  /*
   * 如果一个 component 使用 templateUrl 或者 styleUrls 引入了外部的文件，
   * 则在测试该 component 之前，需要调用 TestBedStatic.compileComponents() 方法 compile 该组件
   *
   * TestBedStatic.compileComponents() 方法是一个 asynchronous method，
   * 因此需要使用 async() 方法包装一下
   */
  beforeEach(async(() => {
    /*
     * TestBedStatic.compileComponents() 方法调用之后，
     * 就不能再对 TestBed 进行其他的配置了
     */
    TestBed.configureTestingModule({
      declarations: [Doc05040413Component],
    })
      .compileComponents()
      .then(() => {
        /*
         * TestBedStatic.compileComponents() 返回的是一个 Promise，
         * 因此可以在 then() 方法的回调函数里面进行其他的配置，
         * 此时，component 已经完成了编译
         */
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05040413Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
