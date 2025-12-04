import React from "react";

export type Double<T> = [T, T];
export type Quodra<T> = [T, T, T, T];

export function isValidKey<T extends object>(obj: T, key: any): key is keyof T {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

export function isTruthy<T>(
  x: T
): x is Exclude<T, null | undefined | 0 | "" | false> {
  return Boolean(x);
}

export const genericMemo: <T>(component: T) => T = React.memo;
