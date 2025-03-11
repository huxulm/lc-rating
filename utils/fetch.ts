import { BASE_PATH } from "@/config/constants";

function createFetchWithPrefix(basePath: string) {
  return async function fetchWithPrefix(
    input: RequestInfo,
    init?: RequestInit
  ): Promise<Response> {
    const getFullUrl = (url: string) => `${basePath}${url}`;

    let processedInput: RequestInfo;
    if (typeof input === "string") {
      processedInput = getFullUrl(input);
    } else {
      processedInput = new Request(getFullUrl(input.url), input);
    }

    return fetch(processedInput, init);
  };
}

export const fetchApi = createFetchWithPrefix(BASE_PATH);
