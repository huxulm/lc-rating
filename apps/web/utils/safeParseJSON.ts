export function safeParseJSON<T>(jsonStr: string): T | undefined {
  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    console.error(`[safeParseJSON] Error parsing JSON: ${jsonStr}`);
    return undefined;
  }
}
