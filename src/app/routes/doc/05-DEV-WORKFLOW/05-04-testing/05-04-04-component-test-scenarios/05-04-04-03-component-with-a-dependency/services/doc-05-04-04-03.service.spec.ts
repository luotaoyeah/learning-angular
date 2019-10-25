import { async, TestBed } from '@angular/core/testing';
import { Doc05040403Service } from './doc-05-04-04-03.service';

describe('src/app/routes/doc/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-03-component-with-a-dependency/services/doc-05-04-04-03.service.ts', () => {
  let service: Doc05040403Service;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [Doc05040403Service],
    });
  }));

  beforeEach(() => {
    service = TestBed.inject(Doc05040403Service);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
