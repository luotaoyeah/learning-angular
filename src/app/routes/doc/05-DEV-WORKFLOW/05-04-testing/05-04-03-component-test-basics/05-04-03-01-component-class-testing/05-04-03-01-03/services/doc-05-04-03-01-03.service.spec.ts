import { Doc0504030103Service } from './doc-05-04-03-01-03.service';
import { async, TestBed } from '@angular/core/testing';

describe('src/app/routes/doc/05-DEV-WORKFLOW/05-04-testing/05-04-03-component-test-basics/05-04-03-01-component-class-testing/05-04-03-01-03/services/doc-05-04-03-01-03.service.ts', () => {
  let service: Doc0504030103Service;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [Doc0504030103Service],
    });
  }));

  beforeEach(() => {
    service = TestBed.get(Doc0504030103Service);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
