import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  public confirm(message?: string): Observable<boolean> {
    const result = window.confirm(message || 'OK ?');

    return of(result);
  }
}
