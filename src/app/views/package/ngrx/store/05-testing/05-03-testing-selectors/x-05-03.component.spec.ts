import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { X0503Component } from './x-05-03.component';
import { selectTotal } from './store/selectors/05-03.selectors';

describe('X0503Component', () => {
  let component: X0503Component;
  let fixture: ComponentFixture<X0503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [X0503Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(X0503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select total', () => {
    /*
     * 如何测试某个 selector 是否正常工作?
     * 我们可以通过 MemoizedSelector.projector 属性获取到该 selector 的 projector 函数,
     * 然后我们可以对这个 projector 函数进行测试
     */
    expect(selectTotal.projector([2, 4], [1, 3])).toEqual(10);
  });
});
