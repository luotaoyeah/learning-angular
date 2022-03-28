import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Doc05040402Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-02-component-with-external-files/doc-05-04-04-02.component';

describe('Doc05040402Component', () => {
  let fixture: ComponentFixture<Doc05040402Component>;
  let component: Doc05040402Component;

  beforeEach(
    waitForAsync(() => {
      /*
       * 如果 component 通过 templateUrl 和 styleUrls 引入了外部的文件,
       * 则在测试之前, 需要调用 TestBed.compileComponents() 方法编译 component
       */
      TestBed.configureTestingModule({
        declarations: [Doc05040402Component],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05040402Component);
    component = fixture.componentInstance;
  });

  it('should created', () => {
    expect(component).toBeTruthy();
  });
});
