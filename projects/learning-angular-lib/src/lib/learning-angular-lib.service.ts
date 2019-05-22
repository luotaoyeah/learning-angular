import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LearningAngularLibService {
  constructor() {}

  public doSomething(): void {
    console.log(`[${LearningAngularLibService.name}]\n`, 'doSomething()');
  }
}
