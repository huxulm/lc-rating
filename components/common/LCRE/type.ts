const optionKeys = ["AC", "WORKING"] as const;

export interface ProgressEventData {
  problemSlug: string;
  optionKey: (typeof optionKeys)[number];
  overwrite: string[];
}

export function isProgressEventData(data: any): data is ProgressEventData {
  return (
    typeof data === "object" &&
    data !== null &&
    data !== void 0 &&
    "problemSlug" in data &&
    typeof data["problemSlug"] === "string" &&
    "optionKey" in data &&
    optionKeys.includes(data["optionKey"])
  );
}
