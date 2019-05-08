import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05070405Component } from './doc-05-07-04-05.component';
import { Doc05070405Service } from './service/doc-05-07-04-05.service';
import { of } from 'rxjs';
import { SharedModule } from '@shared';

/*
 * TODO https://angular.io/guide/testing#component-marble-tests
 */
describe('Doc05070405Component', () => {
  let fixture: ComponentFixture<Doc05070405Component>;
  let component: Doc05070405Component;
  let getNextSpy: jasmine.Spy;
  let messageEl: HTMLButtonElement | null;

  beforeEach(async () => {
    const MockDoc05070405Service = jasmine.createSpyObj('Doc05070405Service', [
      'getNext',
    ]);

    getNextSpy = MockDoc05070405Service.getNext.and.returnValue(of(1));

    TestBed.configureTestingModule({
      declarations: [Doc05070405Component],
      imports: [SharedModule],
      providers: [
        {
          provide: Doc05070405Service,
          useValue: MockDoc05070405Service,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05070405Component);
    component = fixture.componentInstance;
    messageEl = (fixture.nativeElement as HTMLElement).querySelector('button');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(getNextSpy).toBeDefined();
    expect(messageEl).toBeDefined();
  });
});
