import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Doc030702010201Service {
  public doSomething(): void {
    console.log(`[${Doc030702010201Service.name}]`);
  }
}
