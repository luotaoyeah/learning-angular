import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Doc03070101Service {
  public log(message: string): void {
    console.log(`%c[${Doc03070101Service.name}] ${message}`, 'color:#EBAC6E');
  }
}
