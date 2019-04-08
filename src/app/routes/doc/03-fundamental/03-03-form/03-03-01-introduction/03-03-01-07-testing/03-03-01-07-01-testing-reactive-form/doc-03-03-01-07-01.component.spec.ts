import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Doc0303010701Component } from './doc-03-03-01-07-01.component';

describe('Doc0303010701Component', () => {
  let component: Doc0303010701Component;
  let fixture: ComponentFixture<Doc0303010701Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [Doc0303010701Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0303010701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
   * reactive form 的测试不需要依赖 UI 的渲染
   */
  it('should update the value of the input field', () => {
    const inputEl: HTMLInputElement | null = (fixture.nativeElement as HTMLDivElement).querySelector<
      HTMLInputElement
    >('input');
    if (inputEl) {
      inputEl.value = 'blue';
      inputEl.dispatchEvent(new Event('input'));
      expect(fixture.componentInstance.colorFormControl.value).toBe('blue');
    }
  });
});
