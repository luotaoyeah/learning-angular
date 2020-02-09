import { Action } from '@ngrx/store';

enum ActionTypeEnum {
  Foo = '[X020302Component] Foo',
}

class FooAction implements Action {
  public readonly type: string = ActionTypeEnum.Foo;
}

type ActionUnion = FooAction;

export { ActionTypeEnum, FooAction, ActionUnion };
