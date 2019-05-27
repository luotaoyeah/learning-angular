import { Action } from '@ngrx/store';

/*
 * 接口 Action 定义了 action 的类型, 它包含一个 type 属性,
 * 当我们定义一个具体的 action 时, 需要实现这个 Action 接口
 */
/**
 *
 */
class SomeAction01 implements Action {
  /*
   * type 属性是一个字符串, 它的内容格式为: "[Source] Event"
   */
  public readonly type: string = '[Some Source] Some Event';

  /*
   * 除了 type 属性之外, 还可以定义其他的属性, 用来传递其他附加的数据
   */
  public payload: { x: string; y: number };

  constructor(payload: { x: string; y: number }) {
    this.payload = payload;
  }
}

/**
 *
 */
class SomeAction02 implements Action {
  public readonly type: string = '[Source02] Event02';
}

/*
 * 通常, 将当前的所有 actions 通过一个 union type 输出,
 * 方便其他地方使用
 */
type SomeActions = SomeAction01 | SomeAction02;

export { SomeAction01, SomeAction02, SomeActions };
