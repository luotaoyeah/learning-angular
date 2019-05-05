import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { Doc05070404Component } from './doc-05-07-04-04.component';
import { Doc05070404Service } from './service/doc-05-07-04-04.service';
import { of, throwError } from 'rxjs';
import { SharedModule } from '@shared';

describe('Doc05070404Component', () => {
  let fixture: ComponentFixture<Doc05070404Component>;
  let component: Doc05070404Component;
  let getNextSpy: jasmine.Spy;
  let messageEl: HTMLButtonElement | null;

  beforeEach(async () => {
    const MockDoc05070404Service = jasmine.createSpyObj('Doc05070404Service', [
      'getNext',
    ]);

    getNextSpy = MockDoc05070404Service.getNext.and.returnValue(of(1));

    TestBed.configureTestingModule({
      declarations: [Doc05070404Component],
      imports: [SharedModule],
      providers: [
        {
          provide: Doc05070404Service,
          useValue: MockDoc05070404Service,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05070404Component);
    component = fixture.componentInstance;
    messageEl = (fixture.nativeElement as HTMLElement).querySelector('button');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display message on init', () => {
    fixture.detectChanges();

    expect(messageEl).toBeDefined();

    if (messageEl) {
      expect(messageEl.textContent).toEqual('1');
      expect(getNextSpy.calls.any()).toBe(true, 'getNext() called');
    }
  });

  /*
   * fakeAsync() 函数用来包装（wrap）一个 function，使之在 fakeAsync zone 里面执行
   */
  it('should display error message when service throw error', fakeAsync(() => {
    getNextSpy.and.returnValue(throwError('SOME ERR'));
    fixture.detectChanges();

    /*
     * tick() 函数，用在 fakeAsync zone 里面，
     * 用来模拟计时器（timers）的时间流逝
     */
    tick();
    fixture.detectChanges();

    const errorMessageEl: HTMLDivElement | null = (fixture.nativeElement as HTMLElement).querySelector(
      '.ant-alert',
    );

    expect(errorMessageEl).toBeDefined();
    if (errorMessageEl) {
      expect(errorMessageEl.textContent).toEqual('SOME ERR');
    }
    if (messageEl) {
      expect(messageEl.textContent).toEqual('0');
    }
  }));
});
