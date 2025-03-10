import type { StudyPlan } from "@/types";
import { fetchApi } from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";

export function useStudyPlan(planPath: string) {
  const {
    data: studyPlan,
    isPending,
    error,
  } = useQuery<StudyPlan>({
    queryKey: [`studyPlan/${planPath}`],
    queryFn: () =>
      fetchApi(
        `/studyplan/${planPath}.json?t=${(new Date().getTime() / 100000).toFixed(0)}`
      ).then((res) => res.json()),
  });

  return { studyPlan, isPending, error };
}
