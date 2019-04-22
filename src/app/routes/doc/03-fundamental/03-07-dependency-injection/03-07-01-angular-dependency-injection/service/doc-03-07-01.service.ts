import { Injectable } from '@angular/core';
import { COLOR } from './doc-03-07-01-mock';

@Injectable({
  providedIn: 'root',
})
export class Doc030701Service {
  constructor() {}

  getColor(): string {
    return COLOR;
  }
}
