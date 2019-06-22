import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@app/shared';
import { Doc05040405Component } from './doc-05-04-04-05.component';
import { Doc05040405Service } from './services/doc-05-04-04-05.service';
import { getTestScheduler } from 'jasmine-marbles';
import { RunHelpers } from 'rxjs/internal/testing/TestScheduler';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

describe('Doc05040405Component', () => {
  let fixture: ComponentFixture<Doc05040405Component>;
  let component: Doc05040405Component;
  let MockDoc05040405Service: jasmine.SpyObj<Doc05040405Service>;
  let buttonEl: HTMLButtonElement | null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Doc05040405Component],
      imports: [SharedModule],
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

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
});
