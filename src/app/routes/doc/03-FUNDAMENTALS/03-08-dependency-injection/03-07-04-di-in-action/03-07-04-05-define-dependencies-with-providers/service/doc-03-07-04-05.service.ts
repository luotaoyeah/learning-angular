import { InjectionToken } from '@angular/core';

class Foo {
  public foo: string = 'FOO';
}

class Bar {
  public bar: string;

  constructor(bar: string, private foo: Foo) {
    this.bar = this.foo.foo + bar;
  }
}

const SOME_TOKEN_01 = new InjectionToken<string>('some.token.01');
const SOME_TOKEN_02 = new InjectionToken<Foo>('some.token.02');
const SOME_TOKEN_03 = new InjectionToken<Foo>('some.token.03');
const SOME_TOKEN_04 = new InjectionToken<Bar>('some.token.04');

export { SOME_TOKEN_01, SOME_TOKEN_02, SOME_TOKEN_03, SOME_TOKEN_04, Foo, Bar };
