import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Doc0303010701Component } from '@app/views/doc/guide/main-concepts/04-forms/03-03-01-introduction/03-03-01-07-testing/03-03-01-07-01-testing-reactive-form/doc-03-03-01-07-01.component';

describe('Doc0303010701Component', () => {
  let fixture: ComponentFixture<Doc0303010701Component>;
  let component: Doc0303010701Component;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule],
        declarations: [Doc0303010701Component],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0303010701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
   * reactive form 的测试不需要依赖 UI 的渲染,
   * 如下, 测试的式数据从 view 流到 model 的过程
   */
  it('should update the value of the input field', () => {
    const inputEl: HTMLInputElement | null = (fixture.debugElement.nativeElement as HTMLDivElement).querySelector<HTMLInputElement>('input');
    if (inputEl) {
      expect(inputEl.value).toEqual('RED');

      inputEl.value = 'BLUE';
      inputEl.dispatchEvent(new Event('input'));
      expect(component.colorFormControl.value).toBe('BLUE');
    }
  });

  /*
   * 如下, 测试的式数据从 model 流到 view 的过程
   */
  it('should update the value in the control', () => {
    component.colorFormControl.setValue('BLUE');

    const inputEl: HTMLInputElement | null = (fixture.debugElement.nativeElement as HTMLDivElement).querySelector<HTMLInputElement>('input');
    if (inputEl) {
      expect(inputEl.value).toBe('BLUE');
    }
  });
});
