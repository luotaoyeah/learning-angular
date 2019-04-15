import { TestBed } from '@angular/core/testing';

import { Doc050702Service } from './doc-05-07-02.service';

describe('Doc050702Service', () => {
  let service: Doc050702Service;

  beforeEach(() => {
    service = new Doc050702Service();
  });

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    // tslint:disable-next-line:no-shadowed-variable
    const service: Doc050702Service = TestBed.get(Doc050702Service);
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
