import { Doc0507040101Component } from './doc-05-07-04-01-01.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('Doc0507040101Component', () => {
  // @ts-ignore
  let component: Doc0507040101Component;
  let fixture: ComponentFixture<Doc0507040101Component>;
  let h1El: HTMLHeadingElement | null;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [Doc0507040101Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0507040101Component);
    component = fixture.componentInstance;
    h1El = (fixture.nativeElement as HTMLElement).querySelector('h1');

    fixture.detectChanges();
  });

  it('fixture.nativeElement should strictly equals to fixture.debugElement.nativeElement', () => {
    expect(fixture.nativeElement).toBe(fixture.debugElement.nativeElement);
  });

  it('<h1> should exists', () => {
    expect(h1El).toBeTruthy();
  });

  it('should display original title', () => {
    if (h1El) {
      expect(h1El.textContent).toBe('FOO');
    }
  });

  it('should display a changed title', () => {
    /*
     * 修改了组件的属性之后，需要手动调用 ComponentFixture.detectChanges() 方法，
     * 来触发一次 change detection cycle，否则 data binding 不会更新
     */
    component.title = 'BAR';
    fixture.detectChanges();

    if (h1El) {
      expect(h1El.textContent).toBe('BAR');
    }
  });
});
