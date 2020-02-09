import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Doc0504030103Service {
  public isLoggedIn: boolean = false;
  public user: { name: string } = { name: 'guest' };
}
