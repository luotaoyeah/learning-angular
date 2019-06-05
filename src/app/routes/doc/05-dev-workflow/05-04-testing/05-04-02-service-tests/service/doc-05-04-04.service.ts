import { Injectable } from '@angular/core';
import { Doc050402Service } from './doc-05-04-02.service';

@Injectable({
  providedIn: 'root',
})
export class Doc050404Service {
  constructor(private doc050702Service: Doc050402Service) {}

  public syncGet(): string {
    return this.doc050702Service.syncGet();
  }
}
