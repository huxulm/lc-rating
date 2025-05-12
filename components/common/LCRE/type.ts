export interface ProgressEventData {
  problemSlug: string;
  optionKey: string;
  overwrite: string[];
}

export function isProgressEventData(data: unknown): data is ProgressEventData {
  return (
    typeof data === "object" &&
    data !== null &&
    data !== void 0 &&
    "problemSlug" in data &&
    typeof data["problemSlug"] === "string" &&
    "optionKey" in data &&
    typeof data["optionKey"] === "string" &&
    "overwrite" in data &&
    Array.isArray(data["overwrite"]) &&
    data["overwrite"].every((item) => typeof item === "string")
  );
}
