import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05040405Component } from './doc-05-04-04-05.component';
import { Doc05040405Service } from './service/doc-05-04-04-05.service';
import { of } from 'rxjs';
import { SharedModule } from '@app/shared';

/*
 * TODO https://angular.io/guide/testing#component-marble-tests
 */
describe('Doc05040405Component', () => {
  let fixture: ComponentFixture<Doc05040405Component>;
  let component: Doc05040405Component;
  let getNextSpy: jasmine.Spy;
  let messageEl: HTMLButtonElement | null;

  beforeEach(async(() => {
    const MockDoc05040405Service = jasmine.createSpyObj('Doc05040405Service', [
      'getNext',
    ]);

    getNextSpy = MockDoc05040405Service.getNext.and.returnValue(of(1));

    TestBed.configureTestingModule({
      declarations: [Doc05040405Component],
      imports: [SharedModule],
      providers: [
        {
          provide: Doc05040405Service,
          useValue: MockDoc05040405Service,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05040405Component);
    component = fixture.componentInstance;
    messageEl = (fixture.nativeElement as HTMLElement).querySelector('button');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(getNextSpy).toBeDefined();
    expect(messageEl).toBeDefined();
  });
});
