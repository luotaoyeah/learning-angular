import { Doc05070414Component } from './doc-05-07-04-14.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared';

describe('Doc05070414Component', () => {
  let fixture: ComponentFixture<Doc05070414Component>;
  let component: Doc05070414Component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc05070414Component],
      /*
       * 如果当前 component 依赖了其他 NgModule 提供的功能，
       * 比如这个组件中使用了 NgZorroAntdModule 提供的 NzAlertComponent 组件，
       * 那么我们需要通过 imports 选项，引入这个依赖的 NgModule
       */
      imports: [SharedModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05070414Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
