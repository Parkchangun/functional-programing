// 값이 있을수도, 없을수도 있는 자료구조

export type Some<A> = {
  readonly _tag: "Some";
  readonly value: A;
};

export type None = {
  readonly _tag: "None";
};

export type Option<A> = Some<A> | None;

export const some = <A>(value: A): Option<A> => ({
  _tag: "Some",
  value,
});

export const none = <A>(): Option<A> => ({
  _tag: "None",
});

// Type Guard
export const isSome = <A>(option: Option<A>): option is Some<A> => option._tag === "Some";

export const isNone = <A>(option: Option<A>): option is None => option._tag === "None";
