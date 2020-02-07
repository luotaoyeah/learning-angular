import { async, ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { Doc05040404Component } from './doc-05-04-04-04.component';
import { Doc05040404Service } from './services/doc-05-04-04-04.service';
import { defer, interval, Observable, of, throwError } from 'rxjs';
import { SharedModule } from '@app/shared';
import { delay, take } from 'rxjs/operators';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Doc05040404Component', () => {
  let fixture: ComponentFixture<Doc05040404Component>;
  let component: Doc05040404Component;
  let messageEl: HTMLButtonElement | null;
  let MockDoc05040404Service: jasmine.SpyObj<Doc05040404Service>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc05040404Component],
      imports: [SharedModule, NoopAnimationsModule],
      providers: [
        {
          provide: Doc05040404Service,
          useValue: jasmine.createSpyObj<Doc05040404Service>(['getNextNum']),
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    MockDoc05040404Service = TestBed.inject(Doc05040404Service) as jasmine.SpyObj<Doc05040404Service>;
    fixture = TestBed.createComponent(Doc05040404Component);
    component = fixture.componentInstance;
    messageEl = (fixture.nativeElement as HTMLElement).querySelector('.num');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
   * https://angular.io/guide/testing#synchronous-tests
   */
  it('should display num on init', () => {
    MockDoc05040404Service.getNextNum.and.returnValue(of(1));

    fixture.detectChanges();

    if (messageEl) {
      expect(messageEl.textContent).toEqual('1');
      expect(MockDoc05040404Service.getNextNum.calls.SafeAny()).toBe(true);
    }
  });

  /*
   * https://angular.io/guide/testing#async-test-with-fakeasync
   *
   * fakeAsync() 函数用来包装一个 function, 使之在 fakeAsync zone 里面执行
   */
  it('should display error message when service throw error', fakeAsync(() => {
    MockDoc05040404Service.getNextNum.and.returnValue(throwError(new Error('ERR01')));

    fixture.detectChanges();

    /*
     * tick() 函数, 用在 fakeAsync zone 里面, 用来模拟计时器的时间流逝
     */
    tick();
    fixture.detectChanges();

    if (messageEl) {
      expect(messageEl.textContent).toEqual('0');
    }

    const errorMessageEl: HTMLDivElement | null = (fixture.nativeElement as HTMLElement).querySelector('.ant-alert');
    expect(errorMessageEl).toBeTruthy();
    if (errorMessageEl) {
      expect(errorMessageEl.textContent).toEqual('ERR01');
    }
  }));

  /*
   * https://angular.io/guide/testing#the-tick-function
   */
  it('should run timeout callback with delay after call #tick() with milliseconds', fakeAsync(() => {
    let called: boolean = false;

    setTimeout(() => {
      called = true;
    }, 100);

    /*
     * tick() 函数, 用来模拟时间流逝,
     * 它只能用在 fakeAsync() zone 里面,
     * 它接收一个参数, 表示流逝的毫秒数, 默认为 0
     */

    tick(50);
    expect(called).toBe(false);

    tick(100);
    expect(called).toBe(true);
  }));

  /*
   * https://angular.io/guide/testing#comparing-dates-inside-fakeasync
   */
  it('should get date difference in #fakeAsync()', fakeAsync(() => {
    /*
     * 在 fakeAsync() 中模拟时间的流逝
     */
    const start: number = Date.now();
    tick(99);
    const end: number = Date.now();

    expect(end - start).toEqual(99);
  }));

  it('should resolve all microtasks', fakeAsync(() => {
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
     * 我们可以认为 tick() 是用来执行 macrotasks 的, 它同时也会执行所有的 microtasks,
     * 如果我们只需要执行所有的 microtasks, 可以调用 flushMicrotasks() 方法
     */
    flushMicrotasks();

    expect(foo).toBe(true);
    expect(bar).toBe(true);
  }));

  /*
   * https://angular.io/guide/testing#using-the-rxjs-scheduler-inside-fakeasync
   *
   * 在 fakeAsync() 中不仅可以模拟 setTimeout(), setInterval() 等异步操作,
   * 也可以对 rsjx 中的 scheduler 所表示的异步操作进行模拟
   */
  it('should work with rxjs scheduler in fakeAsync', fakeAsync(() => {
    let result01: boolean = false;

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

    const start: number = Date.now();
    let elapsed: number = 0;

    /*
     * interval() 的底层使用的是 setInterval()
     */
    interval(1000)
      .pipe(take(2))
      .subscribe(() => {
        elapsed = Date.now() - start;
      });

    tick(1000);
    expect(elapsed).toBe(1000);

    tick(1000);
    expect(elapsed).toBe(2000);
  }));

  /*
   * https://angular.io/guide/testing#async-observables
   */
  describe('when test with asynchronous observables', () => {
    beforeEach(() => {
      /*
       * 使用 defer() 创建一个 asynchronous observable
       */
      MockDoc05040404Service.getNextNum.and.returnValue(defer(() => Promise.resolve(9)));
    });

    it('should not display num after #ngOnInit()', () => {
      fixture.detectChanges();

      if (messageEl) {
        expect(messageEl.textContent).toEqual('');
        expect(MockDoc05040404Service.getNextNum).toHaveBeenCalledTimes(1);
      }
    });

    it('should display num afetr #getNextNum() in #fakeAsync()', fakeAsync(() => {
      fixture.detectChanges();
      tick();
      fixture.detectChanges();

      if (messageEl) {
        expect(messageEl.textContent).toEqual('9');
        expect(MockDoc05040404Service.getNextNum).toHaveBeenCalledTimes(1);
      }
    }));

    /*
     * https://angular.io/guide/testing#async-test-with-async
     *
     * fakeAsync() 有一个缺点, 就是在它里面不能执行 XHR 请求,
     * 如果需要执行 XHR 请求, 需要使用 async() 方法
     */
    it('should display num after #getNextNum() in #async()', async(() => {
      fixture.detectChanges();

      if (messageEl) {
        expect(messageEl.textContent).toEqual('');

        /*
         * 在 fakeAsync() 中使用的是 tick(),
         * 在 async() 中使用的是 ComponentFixture.whenStable(),
         * ComponentFixture.whenStable() 方法在本次 event loop 的 task queue 清空之后返回,
         * 也就是所有的 async task 执行完毕之后
         *
         * ComponentFixture.isStable() 方法, 可以用来判断 whether the fixture is stable or not
         */
        expect(fixture.isStable()).toBe(false);
        fixture.whenStable().then(() => {
          expect(fixture.isStable()).toBe(true);

          fixture.detectChanges();

          if (messageEl) {
            expect(messageEl.textContent).toEqual('9');
            expect(MockDoc05040404Service.getNextNum.calls.count()).toEqual(1);
          }
        });
      }
    }));

    /*
     * https://angular.io/guide/testing#jasmine-done
     *
     * fakeAsync() 和 async() 简化了 async testing 的流程,
     * 但是我们依然可以使用传统的 jasmine 提供的 done() 方法, 自行处理异步测试流程
     */
    it('should display num after #getNextNum() with #done()', (done: DoneFn) => {
      fixture.detectChanges();

      if (messageEl) {
        expect(messageEl.textContent).toEqual('');

        (MockDoc05040404Service.getNextNum.calls.mostRecent().returnValue as Observable<number>).subscribe(() => {
          fixture.detectChanges();

          if (messageEl) {
            expect(messageEl.textContent).toEqual('9');
            /*
             * 调用 done() 方法, 表示本次异步测试结束,
             * 如果不调用 done() 方法, 则本次测试会一直进行中, 直到超时（jasmine.DEFAULT_TIMEOUT_INTERVAL）
             */
            done();
          }
        });
      }
    });
  });
});
