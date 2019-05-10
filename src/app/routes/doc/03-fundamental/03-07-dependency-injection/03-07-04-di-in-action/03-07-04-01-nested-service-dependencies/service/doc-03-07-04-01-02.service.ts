import { Injectable } from '@angular/core';
import { Doc0307040103Service } from './doc-03-07-04-01-03.service';

@Injectable({
  providedIn: 'root',
})
export class Doc0307040102Service {
  constructor(private doc0307040103Service: Doc0307040103Service) {}

  public getSomething(): string {
    return `02${this.doc0307040103Service.getSomething()}`;
  }
}
