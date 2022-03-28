import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedModule } from '@app/shared';
import { Doc05040412Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-12-use-a-page-object/doc-05-04-04-12.component';

describe('src/app/routes/doc/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-12-use-a-page-object/doc-05-04-04-12.component.ts', () => {
  let fixture: ComponentFixture<Doc05040412Component>;
  let component: Doc05040412Component;
  let page: Page;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Doc05040412Component],
        imports: [SharedModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05040412Component);

    page = new Page(fixture);

    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should query all buttons', () => {
    expect(page.buttons.length).toEqual(2);
    expect(page.button01.textContent).toEqual('FOO');
    expect(page.button02.textContent).toEqual('BAR');
  });
});

/*
 * 通常在测试一个组件的时候, 会有很多繁杂的任务需要处理, 包括: 获取某个元素, 对某个方法进行监视, 等等,
 * 我们可以将这些繁杂的任务封装到一个 Page 类中, 然后在测试的时候, 直接通过这个 Page 类来执行这些操作
 */
class Page {
  get buttons() {
    return this.queryAll<HTMLButtonElement>('button');
  }

  get button01() {
    return this.buttons[0];
  }

  get button02() {
    return this.buttons[1];
  }

  constructor(private fixture: ComponentFixture<Doc05040412Component>) {}

  private queryAll<T extends HTMLElement>(selector: string): NodeListOf<T> {
    return (this.fixture.nativeElement as HTMLElement).querySelectorAll<T>(selector);
  }
}
