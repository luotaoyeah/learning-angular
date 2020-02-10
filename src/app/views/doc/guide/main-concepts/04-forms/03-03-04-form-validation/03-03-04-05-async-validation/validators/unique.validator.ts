import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';

export function uniqueValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return of(0).pipe(
      delay(1000),
      map(() => {
        if (control.value === 'foo') {
          return { unique: true };
        }

        return null;
      }),
      catchError(() => of(null)),
    );
  };
}
