export function debug(...args: any[]) {
  if (process.env.NODE_ENV === "development") {
    console.log(...args);
  }
}

export function debugR<T>(args: T) {
  if (process.env.NODE_ENV === "development") {
    console.log(args);
  }
  return args;
}
