import { Injectable } from '@angular/core';
import { Doc0307040102Service } from './doc-03-07-04-01-02.service';

@Injectable({
  providedIn: 'root',
})
export class Doc0307040101Service {
  constructor(private doc0307040102Service: Doc0307040102Service) {}

  getSomething(): string {
    return `01${this.doc0307040102Service.getSomething()}`;
  }
}
