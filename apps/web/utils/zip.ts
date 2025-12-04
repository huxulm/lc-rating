export function zip<T, U>(arr1: T[], arr2: U[]): [T, U][] {
  arr1 = arr1 || [];
  arr2 = arr2 || [];
  const length = Math.min(arr1.length, arr2.length);
  const result: [T, U][] = [];

  for (let i = 0; i < length; i++) {
    const item1 = arr1[i];
    const item2 = arr2[i];
    if (typeof item1 === "undefined" || typeof item2 === "undefined") {
      continue;
    }
    result.push([item1, item2]);
  }

  return result;
}
