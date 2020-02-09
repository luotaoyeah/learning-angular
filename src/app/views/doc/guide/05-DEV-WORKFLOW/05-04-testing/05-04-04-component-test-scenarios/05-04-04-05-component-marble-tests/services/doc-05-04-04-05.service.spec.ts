import { Doc05040405Service } from './doc-05-04-04-05.service';
import { async, TestBed } from '@angular/core/testing';
import { getTestScheduler } from 'jasmine-marbles';
import { RunHelpers } from 'rxjs/internal/testing/TestScheduler';

describe('src/app/routes/doc/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-05-component-marble-tests/services/doc-05-04-04-05.service.ts', () => {
  let service: Doc05040405Service;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [Doc05040405Service],
    });
  }));

  beforeEach(() => {
    service = TestBed.inject(Doc05040405Service);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should resolve expected numbers', () => {
    const testScheduler = getTestScheduler();
    testScheduler.assertDeepEqual = (actual, expected) => {
      expect(expected).toEqual(actual);
    };

    testScheduler.run(({ expectObservable }: RunHelpers) => {
      expectObservable(service.getNextNum()).toBe('a', { a: 1 });
      expectObservable(service.getNextNum()).toBe('a', { a: 2 });
      expectObservable(service.getNextNum()).toBe('a', { a: 3 });
      expectObservable(service.getNextNum()).toBe('#', undefined, new Error('GREATER THAN 3'));
    });
  });
});
