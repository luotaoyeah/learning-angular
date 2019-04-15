import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Doc0303010702Component } from './doc-03-03-01-07-02.component';

describe('Doc0303010702Component', () => {
  let component: Doc0303010702Component;
  let fixture: ComponentFixture<Doc0303010702Component>;

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

  it('should update the favorite color in the component', fakeAsync(() => {
    const inputEl: HTMLInputElement | null = (fixture.nativeElement as HTMLDivElement).querySelector<
      HTMLInputElement
    >('input');
    if (inputEl) {
      inputEl.value = 'BLUE';
      inputEl.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      expect(component.color).toBe('BLUE');
    }
  }));

  it('should update the favorite color on the input field', fakeAsync(() => {
    component.color = 'YELLOW';
    fixture.detectChanges();

    tick();

    const inputEl: HTMLInputElement | null = (fixture.nativeElement as HTMLDivElement).querySelector<
      HTMLInputElement
    >('input');
    if (inputEl) {
      expect(component.color).toBe('YELLOW');
    }
  }));
});
