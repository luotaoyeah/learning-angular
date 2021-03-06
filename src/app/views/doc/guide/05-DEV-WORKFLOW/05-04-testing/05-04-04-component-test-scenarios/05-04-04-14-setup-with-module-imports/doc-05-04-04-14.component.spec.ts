import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedModule } from '@app/shared';
import { Doc05040414Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-14-setup-with-module-imports/doc-05-04-04-14.component';

describe('Doc05040414Component', () => {
  let fixture: ComponentFixture<Doc05040414Component>;
  let component: Doc05040414Component;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Doc05040414Component],
        /*
         * 如果当前 component 依赖了其他 NgModule 提供的功能,
         * 比如这个组件中使用了 NgZorroAntdModule 提供的 NzAlertComponent 组件,
         * 那么我们需要通过 imports 选项, 引入这个依赖的 NgModule
         */
        imports: [SharedModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05040414Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
