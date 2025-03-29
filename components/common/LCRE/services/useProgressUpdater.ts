import { useOptions } from "@/hooks/useOptions";
import { useProblems } from "@/hooks/useProblems";
import { useProgress } from "@/hooks/useProgress";
import { useCallback, useEffect, useMemo } from "react";
import { isProgressEventData } from "../type";
import { useSendPong } from "./usePingPong";

const LCRE_PROGRESS_EVENT = "lcre-progress-event";

export const useProgressUpdater = () => {
  const { problemMap } = useProblems();
  const { progress, setProgress } = useProgress();
  const { getOption } = useOptions();

  const problems = useMemo(
    () => (problemMap ? Object.values(problemMap) : undefined),
    [problemMap]
  );

  const isReady = !!problems;

  const progressHandler = useCallback(
    (event: Event) => {
      const { detail } = event as CustomEvent;
      const data = detail?.data;

      if (!isProgressEventData(data)) {
        console.error("Invalid progress event data", data);
        return;
      }

      const { problemSlug, optionKey, overwrite } = data;
      const problem = problems?.find((p) => p.titleSlug === problemSlug);

      if (!problem) {
        console.error("Problem not found", problemSlug);
        return;
      }

      const oldProgress = progress[problem.id];
      const oldOptionKey = getOption(oldProgress).key;

      if (overwrite.includes(oldOptionKey)) {
        setProgress(problem.id, optionKey);
      }
    },
    [problems, progress, getOption, setProgress]
  );

  useEffect(() => {
    if (isReady) {
      window.addEventListener(LCRE_PROGRESS_EVENT, progressHandler);
      return () => {
        window.removeEventListener(LCRE_PROGRESS_EVENT, progressHandler);
      };
    }
  }, [isReady, progressHandler]);

  useSendPong({ isReady });
};
