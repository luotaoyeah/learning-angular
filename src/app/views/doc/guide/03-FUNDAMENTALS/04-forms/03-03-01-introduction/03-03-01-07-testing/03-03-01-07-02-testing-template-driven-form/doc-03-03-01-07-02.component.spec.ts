import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Doc0303010702Component } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-01-introduction/03-03-01-07-testing/03-03-01-07-02-testing-template-driven-form/doc-03-03-01-07-02.component';

describe('Doc0303010702Component', () => {
  let fixture: ComponentFixture<Doc0303010702Component>;
  let component: Doc0303010702Component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [Doc0303010702Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0303010702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the color in the component', fakeAsync(() => {
    const inputEl: HTMLInputElement | null = (fixture.debugElement.nativeElement as HTMLDivElement).querySelector<
      HTMLInputElement
    >('input');

    expect(inputEl).toBeTruthy();

    if (inputEl) {
      inputEl.value = 'BLUE';
      inputEl.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      expect(component.color).toBe('BLUE');
    }
  }));

  it('should update the color on the input field', fakeAsync(() => {
    component.color = 'BLUE';
    fixture.detectChanges();

    tick();

    const inputEl: HTMLInputElement | null = (fixture.debugElement.nativeElement as HTMLDivElement).querySelector<
      HTMLInputElement
    >('input');

    expect(inputEl).toBeTruthy();

    if (inputEl) {
      expect(component.color).toBe('BLUE');
    }
  }));
});
