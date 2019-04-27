import { Doc0507040102Component } from './doc-05-07-04-01-02.component';
import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';

describe('Doc0507040102Component', () => {
  let fixture: ComponentFixture<Doc0507040102Component>;
  let component: Doc0507040102Component;
  let h1El: HTMLHeadingElement | null;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [Doc0507040102Component],
      /*
       * 默认情况下，在测试时，angular 不会自动执行 change detection，
       * 我们可以通过注册 providers 设置 ComponentFixtureAutoDetect 为 true 来启用自动执行
       */
      providers: [
        {
          provide: ComponentFixtureAutoDetect,
          useValue: true,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0507040102Component);
    component = fixture.componentInstance;
    h1El = (fixture.nativeElement as HTMLElement).querySelector('h1');
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should still display the original title', () => {
    if (h1El) {
      /*
       * ComponentFixtureAutoDetect 只对 asynchronous 操作有效，
       * 如下，直接通过 sync 的方式修改了组件的属性，不会自动触发 change detection
       */
      component.title = 'BAR';

      expect(h1El.textContent).toEqual('FOO');
    }
  });

  it('should display updated title after detectChanges', () => {
    if (h1El) {
      component.title = 'BAZ';
      fixture.detectChanges();

      expect(h1El.textContent).toEqual('BAZ');
    }
  });
});
