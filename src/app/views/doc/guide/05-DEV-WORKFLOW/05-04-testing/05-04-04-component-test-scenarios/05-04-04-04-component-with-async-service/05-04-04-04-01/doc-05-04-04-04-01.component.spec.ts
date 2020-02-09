import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Doc0504040401Component } from './doc-05-04-04-04-01.component';

describe('Doc05040404Component', () => {
  let fixture: ComponentFixture<Doc0504040401Component>;
  let component: Doc0504040401Component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc0504040401Component],
    }).compileComponents();
  }));

  /*
   * 默认情况下, fakeAsync() 中支持的 macroTask 包括:
   *     setTimeout()
   *     setInterval()
   *     requestAnimationFrame()
   *
   * 如果需要支持其他类型的 marcoTask, 需要进行如下设置
   */
  beforeEach(() => {
    // @ts-ignore
    // eslint-disable-next-line camelcase
    window.__zone_symbol__FakeAsyncTestMacroTask = [
      {
        source: 'HTMLCanvasElement.toBlob',
        callbackArgs: [{ size: 200 }],
      },
    ];

    fixture = TestBed.createComponent(Doc0504040401Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set #blobSize', fakeAsync(() => {
    fixture.detectChanges();

    tick();

    /*
     * FIXME https://github.com/angular/zone.js/issues/1240#issuecomment-500614954
     */
    expect(component.blobSize).toBeGreaterThan(0);
  }));
});
