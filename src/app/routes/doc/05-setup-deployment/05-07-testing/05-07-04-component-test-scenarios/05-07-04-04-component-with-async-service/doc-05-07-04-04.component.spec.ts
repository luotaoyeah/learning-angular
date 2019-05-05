import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05070404Component } from './doc-05-07-04-04.component';
import { Doc05070404Service } from './service/doc-05-07-04-04.service';
import { of } from 'rxjs';
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
});
