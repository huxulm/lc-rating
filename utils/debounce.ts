function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  wait: number,
  immediate: boolean = false
): (...args: Parameters<T>) => void {
  let handle: ReturnType<typeof setTimeout> | undefined = undefined;

  return (...args: Parameters<T>): void => {
    const shouldCallNow = immediate && handle === undefined;

    if (handle !== undefined) {
      clearTimeout(handle);
    }

    handle = setTimeout(() => {
      if (!immediate) {
        func(...args);
      }
      handle = undefined;
    }, wait);

    if (shouldCallNow) {
      func(...args);
    }
  };
}

export default debounce;
