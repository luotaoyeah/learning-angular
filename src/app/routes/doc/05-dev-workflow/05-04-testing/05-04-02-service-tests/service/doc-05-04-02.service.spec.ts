import { TestBed } from '@angular/core/testing';

import { Doc050402Service } from './doc-05-04-02.service';

describe('Doc050402Service', () => {
  let service: Doc050402Service;

  beforeEach(() => {
    service = new Doc050402Service();
  });

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    // tslint:disable-next-line:no-shadowed-variable
    const service: Doc050402Service = TestBed.get(Doc050402Service);
    expect(service).toBeTruthy();
  });

  it('#syncGet() should return a value', () => {
    expect(service.syncGet()).toBe('foo');
  });

  it('#asyncGet() should return a promise', (done: DoneFn) => {
    service.asyncGet().then((value: string) => {
      expect(value).toBe('foo');
      done();
    });
  });
});
