import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Doc03070407Service {
  public getNumbers(): Array<number> {
    return [1, 5, 2, 4, 3];
  }
}
