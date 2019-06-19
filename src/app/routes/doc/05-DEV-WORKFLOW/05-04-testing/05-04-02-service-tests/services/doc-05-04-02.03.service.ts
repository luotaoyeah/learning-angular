import { Injectable } from '@angular/core';
import { Doc05040201Service } from './doc-05-04-02.01.service';

@Injectable({
  providedIn: 'root',
})
export class Doc05040203Service {
  constructor(private doc050702Service: Doc05040201Service) {}

  public syncGet(): string {
    return this.doc050702Service.getValue();
  }
}
