import { Action } from '@ngrx/store';

enum ActionTypeEnum {
  Foo = '[X02030101Component] Foo',
}

class SomeAction implements Action {
  public readonly type: string = ActionTypeEnum.Foo;
}

type ActionUnion = SomeAction;

export { ActionTypeEnum, SomeAction, ActionUnion };
