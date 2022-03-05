import { Injectable } from '@angular/core';
import { Doc0307040103Service } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-01-nested-service-dependencies/service/doc-03-07-04-01-03.service';

@Injectable({
  providedIn: 'root',
})
export class Doc0307040102Service {
  constructor(private doc0307040103Service: Doc0307040103Service) {}

  public getSomething(): string {
    return `02${this.doc0307040103Service.getSomething()}`;
  }
}
