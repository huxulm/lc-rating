export function parallelReduceFn<T, R>(
  funcs: ((x: T) => R)[],
  reducer: (acc: R, x: R) => R,
  initial: R
) {
  return (x: T) => funcs.reduce((acc, f) => reducer(acc, f(x)), initial);
}
