import { Injectable } from '@angular/core';
import { Doc05040201Service } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-02-service-tests/services/doc-05-04-02.01.service';

@Injectable({
  providedIn: 'root',
})
export class Doc05040202Service {
  constructor(private doc05040201Service: Doc05040201Service) {}

  public getValue(): string {
    return this.doc05040201Service.getValue();
  }
}
