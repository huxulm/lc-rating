function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let prev = 0;

  return (...args: Parameters<T>): void => {
    const now = Date.now();

    if (now - prev >= wait) {
      func(...args);
      prev = now;
    }
  };
}

export default throttle;
