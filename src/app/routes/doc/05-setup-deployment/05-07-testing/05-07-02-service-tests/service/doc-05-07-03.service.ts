import { Injectable } from '@angular/core';
import { Doc050702Service } from './doc-05-07-02.service';

@Injectable({
  providedIn: 'root',
})
export class Doc050703Service {
  constructor(private doc050702Service: Doc050702Service) {}

  syncGet(): string {
    return this.doc050702Service.syncGet();
  }
}
