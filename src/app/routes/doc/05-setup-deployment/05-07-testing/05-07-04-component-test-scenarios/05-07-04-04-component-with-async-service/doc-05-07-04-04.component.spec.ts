import {
  ComponentFixture,
  fakeAsync,
  flushMicrotasks,
  TestBed,
  tick,
} from '@angular/core/testing';
import { Doc05070404Component } from './doc-05-07-04-04.component';
import { Doc05070404Service } from './service/doc-05-07-04-04.service';
import { interval, of, throwError } from 'rxjs';
import { SharedModule } from '@shared';
import { delay, take } from 'rxjs/operators';

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

  it('should run timeout callback with delay after call tick() with milliseconds', fakeAsync(() => {
    let called01 = false;
    let called02 = false;

    setTimeout(() => {
      called01 = true;
    }, 100);

    /*
     * tick() 函数，用来模拟针对于 timer 的异步的时间流逝，
     * 它只能用在 fakeAsync() zone 里面，
     * 它接收一个参数，表示流逝的毫秒数，默认为 0
     */
    tick(100);
    expect(called01).toBe(true, 'called01 be true');

    setTimeout(() => {
      called02 = true;
    }, 1000);

    tick(1000);
    expect(called02).toBe(true, 'called02 be true');
  }));

  it('should get date difference correctly', fakeAsync(() => {
    /*
     * 在 fakeAsync() 中模拟时间的流逝
     */
    const start = Date.now();
    tick(99);
    const end = Date.now();

    expect(end - start).toEqual(99);
  }));

  it('should execute microtask correctly', fakeAsync(() => {
    let foo = false;
    let bar = false;

    Promise.resolve(true)
      .then((value: boolean) => {
        foo = value;
        return true;
      })
      .then((value: boolean) => {
        bar = value;
      });

    expect(foo).toBe(false);
    expect(bar).toBe(false);

    /*
     * 调用 flushMicrotasks() 方法，用来执行所有的 microtasks
     */
    flushMicrotasks();

    expect(foo).toBe(true);
    expect(bar).toBe(true);
  }));

  it('should get date difference correctly in fakeAsync with rxjs scheduler', fakeAsync(() => {
    let result01 = false;

    /*
     * delay() 的底层使用的是 setTimeout()
     */
    of(true)
      .pipe(delay(1000))
      .subscribe((value: boolean) => {
        result01 = value;
      });
    expect(result01).toBe(false);

    tick(1000);
    expect(result01).toBe(true);

    const start = Date.now();
    let elapsed = 0;

    /*
     * interval() 的底层使用的是 setInterval()
     */
    interval(1000)
      .pipe(take(2))
      .subscribe((value: number) => {
        elapsed = Date.now() - start;
      });

    tick(1000);
    expect(elapsed).toBe(1000);

    tick(1000);
    expect(elapsed).toBe(2000);
  }));
});
