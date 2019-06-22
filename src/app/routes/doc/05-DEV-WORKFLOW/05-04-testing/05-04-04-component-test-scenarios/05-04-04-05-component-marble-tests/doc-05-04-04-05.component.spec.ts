import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { SharedModule } from '@app/shared';
import { Doc05040405Component } from './doc-05-04-04-05.component';
import { Doc05040405Service } from './services/doc-05-04-04-05.service';
import { getTestScheduler } from 'jasmine-marbles';
import { RunHelpers } from 'rxjs/internal/testing/TestScheduler';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Doc05040405Component', () => {
  let fixture: ComponentFixture<Doc05040405Component>;
  let component: Doc05040405Component;
  let MockDoc05040405Service: jasmine.SpyObj<Doc05040405Service>;
  let buttonEl: HTMLButtonElement | null;
  let spanEl: HTMLSpanElement | null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc05040405Component],
      imports: [SharedModule, NoopAnimationsModule],
      providers: [
        {
          provide: Doc05040405Service,
          useValue: jasmine.createSpyObj<Doc05040405Service>(
            'Doc05040405Service',
            ['getNextNum'],
          ),
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    MockDoc05040405Service = TestBed.get(Doc05040405Service);

    fixture = TestBed.createComponent(Doc05040405Component);
    component = fixture.componentInstance;
    buttonEl = (fixture.nativeElement as HTMLElement).querySelector('.num');
    spanEl = (fixture.nativeElement as HTMLElement).querySelector('.ant-alert');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
   * https://angular.io/guide/testing#component-marble-tests
   */
  it('should display num', () => {
    getTestScheduler().run(({ cold, flush }: RunHelpers) => {
      const observable01: ColdObservable<number> = cold('---x', {
        x: 3,
      });

      MockDoc05040405Service.getNextNum.and.returnValue(observable01);

      fixture.detectChanges();

      flush();

      fixture.detectChanges();

      if (buttonEl) {
        expect(buttonEl.textContent).toEqual('3');
      }
    });
  });

  /*
   * https://angular.io/guide/testing#marble-error-testing
   */
  it('should display the error message', fakeAsync(() => {
    getTestScheduler().run(({ cold, flush }: RunHelpers) => {
      const observable01$ = cold('---#|', undefined, new Error('ERR01'));

      MockDoc05040405Service.getNextNum.and.returnValue(observable01$);

      fixture.detectChanges();

      flush();
      tick();

      fixture.detectChanges();

      if (buttonEl) {
        expect(buttonEl.textContent).toEqual('0');
      }
      if (spanEl) {
        expect(spanEl.textContent).toEqual('ERR01');
      }
    });
  }));
});
