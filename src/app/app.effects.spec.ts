import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { SafeAny } from '@src/typings';
import { Observable } from 'rxjs';
import { AppEffects } from '@app/app.effects';

describe('AppEffects', () => {
  let actions$: Observable<SafeAny>;
  let effects: AppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(AppEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
