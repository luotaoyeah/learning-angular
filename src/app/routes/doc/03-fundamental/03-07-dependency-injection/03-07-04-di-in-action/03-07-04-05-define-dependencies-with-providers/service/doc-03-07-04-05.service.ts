import { InjectionToken } from '@angular/core';

class Foo {
  public foo: string = 'FOO';
}

const SOME_TOKEN_01 = new InjectionToken<string>('some.token.01');
const SOME_TOKEN_02 = new InjectionToken<Foo>('some.token.02');
const SOME_TOKEN_03 = new InjectionToken<Foo>('some.token.03');

export { SOME_TOKEN_01, SOME_TOKEN_02, SOME_TOKEN_03, Foo };
