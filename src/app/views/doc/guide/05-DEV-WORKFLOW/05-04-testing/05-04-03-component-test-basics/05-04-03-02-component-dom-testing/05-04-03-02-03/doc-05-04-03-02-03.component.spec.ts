import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc0504030203Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-03-component-test-basics/05-04-03-02-component-dom-testing/05-04-03-02-03/doc-05-04-03-02-03.component';

describe('Doc0504030203Component', () => {
  let component: Doc0504030203Component;
  let fixture: ComponentFixture<Doc0504030203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc0504030203Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc0504030203Component);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
   * ComponentFixture.nativeElement 属性实际上是一个快捷方式,
   * 它实际上表示的是 ComponentFixture.debugElement.nativeElement 属性
   */
  it('should have the same value fo `nativeElement` and `debugElement.nativeElement`', () => {
    expect(fixture.nativeElement).toBe(fixture.debugElement.nativeElement);
  });
});
